import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const resume = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length 720 >>
stream
BT
/F2 22 Tf
72 720 Td
(Ridhi Jolly) Tj
0 -28 Td
/F1 13 Tf
(AI Product Manager) Tj
0 -22 Td
(ridhi.jolly03@gmail.com  |  +91-9013177111) Tj
0 -36 Td
(Replace this placeholder with your full resume PDF.) Tj
0 -20 Td
(Save the file as public/resume.pdf and keep the same path.) Tj
0 -36 Td
(KaDeep Technologies  -  AI Product Manager  -  Feb 2026 to Present) Tj
0 -20 Td
(Led KaDeep Studios from problem framing to production.) Tj
0 -20 Td
(Dual-engine automation, NL test generation, self-healing AI,) Tj
0 -20 Td
(and Accessibility from WCAG scan to CI release gate.) Tj
0 -28 Td
(IEEE publication: Multi-Model Sentiment Analysis for E-commerce) Tj
0 -20 Td
(94.6% accuracy, 97.1% F1. DOI 10.1109/InSIGHT67393.2025.11350602) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000278 00000 n 
0000001050 00000 n 
0000001117 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
1188
%%EOF
`;

writeFileSync(resolve("public/resume.pdf"), resume, "utf8");

const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUV5ErkJggg=",
  "base64",
);
writeFileSync(resolve("public/og-image.png"), png);

console.log("Wrote public/resume.pdf and public/og-image.png");
