<h1>
  Hero Section Met P5
</h1>
<h2>
  Grid lay-out
</h2>
<p>
  Voor deze hero section gebruiken ik CSS Grid, omdat de layout uit twee duidelijke delen bestaat: 
  links de projectinformatie en rechts de p5 sketch. Grid is hiervoor handig, omdat je makkelijk kolommen 
  kunt maken en die later op kleinere schermen onder elkaar kunt zetten.
</p>
<img width="492" height="39" alt="CSS grid code" src="https://github.com/user-attachments/assets/10abdb59-cfdb-4fea-8a75-fcaa69b434ef" />
<p>
  De eerste kolom is voor de tekst. Met minmax() zorg ik dat deze kolom niet te smal wordt, maar ook niet te veel ruimte inneemt. 
  De tweede kolom gebruikt 1fr, waardoor de p5 sketch automatisch alle overgebleven ruimte krijgt.
</p>

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

<h2>
  Responsiveness
</h2>

<p> Om de layout responsive te maken, verandert de grid op kleinere schermen naar één kolom:</p>
<img width="283" height="75" alt="Grid CSS" src="https://github.com/user-attachments/assets/e263d164-306a-4750-9070-b7eb079a8d9c" />

<p>De p5 sketch word boven de tekst gezet met:</p>
<img width="221" height="72" alt="volgorde grid CSS code" src="https://github.com/user-attachments/assets/30dd491f-34a7-424a-8ec3-13e54ffaa11e" />

<p>Belangrijk is dat de CSS de grootte bepaalt, niet de p5 canvas zelf. Daarom krijgt de container van de sketch de hoogte:</p>
<img width="212" height="162" alt="max-height CSS code" src="https://github.com/user-attachments/assets/cfed7c09-7866-44e4-8274-eba7f893ee63" />

<p>De canvas wordt daarna binnen die container geplaatst:</p>
<img width="239" height="106" alt="canvas CSS code" src="https://github.com/user-attachments/assets/d030d346-34b8-4530-a981-043272dffcda" />
<p>
  In de p5 sketch wordt bij het resizen opnieuw gemeten hoe groot de container is. Daarna wordt de canvas aangepast aan die maat. Zo blijft de     sketch netjes binnen de hero en maakt de canvas de layout niet kapot.
</p>

<h2>
  Samengevat
</h2>
<p>Grid bepaalt de layout, CSS bepaalt de grootte van de sketch-container, en p5 past de canvas aan die container aan.</p>



