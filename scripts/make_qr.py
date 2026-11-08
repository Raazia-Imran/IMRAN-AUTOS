"""Create print-ready QR files ONLY for the verified permanent HTTPS website."""
import argparse
from pathlib import Path
from urllib.parse import urlparse
from urllib.request import urlopen, Request
import qrcode
import qrcode.image.svg
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('url',help='Verified permanent HTTPS homepage')
parser.add_argument('--confirmed-domain',action='store_true',help='Confirm ownership, DNS, HTTPS and mobile access have been checked')
parser.add_argument('--output',default='output/qr')
args=parser.parse_args()
u=urlparse(args.url)
if not args.confirmed_domain:parser.error('Verify the permanent domain, then pass --confirmed-domain. Do not print a preview QR.')
if u.scheme!='https' or not u.hostname or u.username or u.password or u.query or u.fragment or u.path not in ('','/') or u.port not in (None,443):parser.error('Use the permanent HTTPS homepage without a query, fragment or credentials.')
if u.hostname in ('localhost','example.com','example.org') or u.hostname.endswith(('.vercel.app','.chatgpt.site','.pages.dev')):parser.error('Temporary preview addresses are unsuitable for printed cards. Use the owned permanent domain.')
with urlopen(Request(args.url,headers={'User-Agent':'ImranAutos-QR-Check/1.0'}),timeout=20) as r:
 if r.status!=200:parser.error('Homepage did not return HTTP 200.')
 final=urlparse(r.url)
 if final.scheme!='https':parser.error('Final website must use HTTPS.')
 target=final.geturl()
qr=qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H,box_size=30,border=4)
qr.add_data(target);qr.make(fit=True)
out=Path(args.output);out.mkdir(parents=True,exist_ok=True)
qr.make_image(fill_color='black',back_color='white').save(out/'Imran_Autos_Website_QR.png')
qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save(out/'Imran_Autos_Website_QR.svg')
# Vector PDF, 35 mm total including the mandatory quiet zone.
pdf=canvas.Canvas(str(out/'Imran_Autos_Website_QR.pdf'),pagesize=(35*mm,35*mm))
matrix=qr.get_matrix();module=35*mm/len(matrix)
pdf.setFillColorRGB(1,1,1);pdf.rect(0,0,35*mm,35*mm,fill=1,stroke=0)
pdf.setFillColorRGB(0,0,0)
for y,row in enumerate(matrix):
 for x,filled in enumerate(row):
  if filled:pdf.rect(x*module,(len(matrix)-y-1)*module,module,module,fill=1,stroke=0)
pdf.save();(out/'destination.txt').write_text(target+'\n',encoding='utf-8')
print('Created PNG, SVG and vector PDF for:',target)
print('Scan the actual printer proof on two phones before approving cards.')
