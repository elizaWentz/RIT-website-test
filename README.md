<h1>
  Hero Section Met P5
</h1>
<h2>
  Grid lay-out
</h2>
<p>
  Voor deze hero section gebruik ik CSS Grid, omdat de layout uit twee duidelijke delen bestaat: 
  links de projectinformatie en rechts de p5 sketch. Grid is hiervoor handig, omdat je makkelijk kolommen 
  kunt maken en die later op kleinere schermen onder elkaar kunt zetten.
</p>
<img width="492" height="39" alt="CSS grid code" src="https://github.com/user-attachments/assets/10abdb59-cfdb-4fea-8a75-fcaa69b434ef" />
<p>
  De eerste kolom is voor de tekst. Met minmax() zorg ik dat deze kolom niet te smal wordt, maar ook niet te veel ruimte inneemt. 
  De tweede kolom gebruikt 1fr, waardoor de p5 sketch automatisch alle overgebleven ruimte krijgt.
</p>

<h2>
  Responsiveness
</h2>

<p> Om de layout responsive te maken, verandert de grid op kleinere schermen naar één kolom:</p>
<img width="283" height="75" alt="Grid CSS" src="https://github.com/user-attachments/assets/e263d164-306a-4750-9070-b7eb079a8d9c" />

<p>De p5 sketch wordt boven de tekst gezet met:</p>
<img width="221" height="72" alt="volgorde grid CSS code" src="https://github.com/user-attachments/assets/30dd491f-34a7-424a-8ec3-13e54ffaa11e" />


<h2>
  P5 inladen
</h2>
<p>
  De p5 sketch wordt geladen door eerst de p5 library te laden en daarna het eigen sketch-bestand:
</p>
<img width="541" height="36" alt="html script p5" src="https://github.com/user-attachments/assets/cf50a4e7-3164-4161-85ea-3fb1a6ef6bac" />
<p>
  De p5 library staat lokaal in de vendor map. Daardoor hoeft de site p5 niet van het internet te downloaden en werkt de sketch betrouwbaarder.
</p>

<p>
  Belangrijk is dat CSS de zichtbare grootte van de sketch bepaalt. 
  De p5 canvas mag nog steeds 1920 x 1080 zijn, maar de container bepaalt hoe groot de sketch op de pagina wordt getoond.
</p>
<img width="212" height="162" alt="max-height CSS code" src="https://github.com/user-attachments/assets/cfed7c09-7866-44e4-8274-eba7f893ee63" />

<p>
  In main.js wordt de canvas die p5 aanmaakt automatisch opgezocht en verplaatst naar de container #project-sketch.
</p>
<img width="477" height="270" alt="p5 javascript code" src="https://github.com/user-attachments/assets/eb9d83b0-6b33-43fe-acde-1a4e4520fa4e" />


<p>
  Daarna zorgt CSS ervoor dat de canvas het hele vak vult. Met position: absolute, inset: 0, width: 100%, height: 100% en object-fit: cover 
  blijft de canvas netjes binnen de hero. Hierdoor hoef je niet elke p5 sketch apart responsive te maken.
</p>
<img width="252" height="131" alt="canvas CSS code" src="https://github.com/user-attachments/assets/e2c3fafb-c048-4670-821d-5ec5eff9d747" />



<h2>
  Samengevat
</h2>
<p>Grid bepaalt de layout, CSS bepaalt de grootte van de sketch-container, en main.js verplaatst de p5 canvas naar die container. Daarna zorgt CSS ervoor dat de canvas de container vult zonder de layout kapot te maken.</p>

