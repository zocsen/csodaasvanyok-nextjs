import { Metadata } from "next";
import "./adatkezelesi-tajekoztato.scss";

export const metadata: Metadata = {
  title: "Adatkezelés - Csodaásványok",
  description:
    "Ismerje meg adatvédelmi gyakorlatainkat a Csodaásványok webáruházban. Tájékozódjon arról, hogyan kezeljük és védjük személyes adatait, miközben eredeti ásvány karkötőket, nyakláncokat és fülbevalókat böngész.",
};

const AdatkezelesiTajekoztato = () => {
  return (
    <div className="adatkezelesi-tajekoztato">
      <h1>Adatkezelési tájékoztató</h1>

      <br />
      <h2>Adatkezelő</h2>
      <p>Név: Csendes Zoltánné ev.</p>
      <p>Nyilvántartási száma: 57668691</p>
      <p>Adószáma: 59621601-1-23</p>
      <p>Székhely: 6100 Kiskunfélegyháza, Szeder utca 19.</p>
      <p>
        Levelezési cím, panaszkezelés: 6100 Kiskunfélegyháza, Szeder utca 19.
      </p>
      <p>E-mail: csodaasvanyok@gmail.com</p>
      <p>Weboldal: https://csodaasvanyok.hu/</p>

      <br />
      <h2>Tárhelyszolgáltató</h2>
      <p>Név: Railway Corporation</p>
      <p>Székhely: 80 Rossi Avenue, San Francisco, CA 94118</p>
      <p>
        Weboldal: <a href="https://railway.app">railway.app</a>{" "}
      </p>
      <p>Telefon: 347-757-2499</p>
      <br />
      <h2>Tárhelyszolgáltató</h2>
      <p>Név: Vercel Inc.</p>
      <p>Székhely: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
      <p>
        Weboldal: <a href="https://vercel.com">vercel.com</a>
      </p>
      <br />
      <h2>Adatbázis szolgáltató</h2>
      <p>Név: MongoDB</p>
      <p>
        Székhely: MongoDB, Inc., 1633 Broadway, 38th Floor, New York, NY 10019,
        USA
      </p>
      <p>
        Weboldal: <a href="https://www.mongodb.com">mongodb.com</a>
      </p>
      <br />
      <h2>Képek tárolásának szolgáltatója:</h2>
      <p>Név: Amazon Inc.</p>
      <p>
        Székhely: Amazon Web Services, Inc., 410 Terry Avenue North, Seattle, WA
        98109-5210, USA
      </p>
      <p>
        Elérhetőségei:{" "}
        <a href="https://aws.amazon.com/s3/">aws.amazon.com/s3/</a>
      </p>
      <br />
      <h2>A webshop üzemeltetése során végzett adatkezelések leírása</h2>
      <br />
      <p>A weboldal jelenleg nem használ cookie-kat.</p>
      <br />
      <br />
      <h2>A szerződéskötés és teljesítés érdekében kezelt adatok:</h2>
      <br />
      <p>
        A szerződéskötés és teljesítés érdekében több adatkezelési eset is
        megvalósulhat. Tájékoztatjuk, hogy panaszkezeléssel, garanciális
        ügyintézéssel kapcsolatos adatkezelés csak abban az esetben valósul meg,
        ha Ön él valamelyik említett jogával.
      </p>
      <p>
        Amennyiben a webshopon keresztül Ön nem vásárol, csak látogatója a
        webshopnak, akkor a marketing célú adatkezelésnél írtak vonatkozhatnak
        Önre, amennyiben marketing célú hozzájárulást ad számunkra.
      </p>
      <p>
        A szerződéskötés és teljesítés érdekében megvalósuló adatkezelések
        részletesebben:
      </p>
      <br />
      <br />
      <h2>Kapcsolatfelvétel</h2>
      <p>
        Ha e-mailben vagy kapcsolatfelvételi űrlapon kérdéssel fordul hozzánk
        valamely termékkel kapcsolatban. Az előzetes kapcsolatfelvétel nem
        kötelező, ezt kihagyva is bármikor rendelhet a webshopból.
      </p>
      <br />
      <h3>Kezelt adatok</h3>
      <p>
        Az Ön által a kapcsolatfelvétel során megadott adatok (vezetéknév,
        keresztnév, e-mail cím).
      </p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>Az adatokat csak a kapcsolatfelvétel lezárultáig kezeljük.</p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        Az Ön önkéntes hozzájárulása, amit a kapcsolatfelvétellel ad meg
        Adatkezelő számára. [Rendelet 6. cikk (1) bekezdés a) pont szerinti
        adatkezelés]
      </p>

      <br />
      <h2>A rendelés feldolgozása</h2>
      <p>A weboldalon regisztráció nélkül lehet vásárolni.</p>
      <br />
      <h3>Kezelt adatok</h3>
      <p>
        Az adatkezelés során az Adatkezelő az Ön vezetéknevét, keresztnevét,
        lakcímét, telefonszámát, e-mail címét, a megvásárolt termék jellemzőit,
        a megrendelés számát és a vásárlás időpontját kezeli.
      </p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>Az adatokat a polgári jogi elévülési idő szerint 5 évig kezeljük.</p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        A szerződés teljesítése. [Rendelet 6. cikk (1) bekezdés b) pont szerinti
        adatkezelés]
      </p>

      <br />
      <h2>A számla kiállítása</h2>
      <br />
      <h3>Kezelt adatok</h3>
      <p>Vezetéknév, keresztnév, lakcím, e-mail cím, telefonszám.</p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>
        A kiállított számlákat az Sztv. 169. § (2) bekezdése alapján a számla
        kiállításától számított 8 évig meg kell őrizni.
      </p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        Az általános forgalmi adóról szóló 2007. évi CXXVII. 159. § (1)
        bekezdése alapján a számla kibocsátása kötelező és azt számvitelről
        szóló 2000. évi C. törvény 169. § (2) bekezdése alapján 8 évig kell
        megőrizni [Rendelet 6. cikk (1) bekezdés c) pont szerinti adatkezelés].
      </p>

      <br />
      <h2>Az áruszállításhoz kapcsolódó adatkezelés</h2>
      <br />
      <h3>Kezelt adatok</h3>
      <p>Vezetéknév, keresztnév, lakcím, e-mail cím, telefonszám.</p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>
        Az Adatkezelő az adatokat a megrendelt áru kiszállításának időtartamáig
        kezeli.
      </p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        Szerződés teljesítése [Rendelet 6. cikk (1) bekezdés b) pont szerinti
        adatkezelés].
      </p>
      <br />
      <h3>
        Az áruszállításhoz kapcsolódó adatkezelések címzettjei, adatfeldolgozói
      </h3>
      <ul>
        <li>Név: Magyar Posta Zrt.</li>
        <li>Székhely: 1138 Budapest, Dunavirág utca 2-6.</li>
        <li>E-mail: ugyfelszolgalat@posta.hu</li>
        <li>Telefon: 06-1-767-8282</li>
        <li>
          Web: <a href="https://www.posta.hu/">https://www.posta.hu/</a>
        </li>
      </ul>
      <ul>
        <li>Név: FOXPOST Zártkörűen Működő Részvénytársaság</li>
        <li>Magyarország, 3300 Eger, Maklári út 119.</li>
        <li>Telefonszám: 06-1-999-0-369* (*munkanapokon 08:00-20:00)</li>
        <li>
          Weboldala: <a href="https://foxpost.hu/">https://foxpost.hu/</a>
        </li>
        <li>E-mail: info@foxpost.hu</li>
      </ul>
      <ul>
        <li>
          Név: GLS General Logistics Systems Hungary Csomag-Logisztikai Kft.
        </li>
        <li>Székhelye: 2351 Alsónémedi, GLS Európa utca 2.</li>
        <li>E-mail címe: info@gls-hungary.com</li>
        <li>
          Weboldala:{" "}
          <a href="https://gls-group.eu/HU/hu/home">
            https://gls-group.eu/HU/hu/home
          </a>
        </li>
      </ul>

      <br />
      <h2>Szavatossági és jótállási igények kezelése</h2>
      <p>
        A szavatossági és jótállási igényeket a 19/2014. (IV. 29.) NGM rendelet
        szabályai szerint kell eljárnunk, amely meghatározza azt is, hogy miként
        kell az igényét kezelnünk.
      </p>
      <br />
      <h3>Kezelt adatok</h3>
      <p>
        A szavatossági és jótállási igények kezelésekor a 19/2014. (IV. 29.) NGM
        rendelet szabályai szerint kell eljárnunk.
      </p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>
        A vállalkozás a fogyasztó szavatossági vagy jótállási igényéről felvett
        jegyzőkönyvet az annak felvételétől számított három évig köteles
        megőrizni, és azt az ellenőrző hatóság kérésére bemutatni.
      </p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        Az adatkezelés jogalapja a 19/2014. (IV. 29.) NGM rendelet [4. § (1)
        bekezdés és 6. § (1) bekezdés] szerinti jogi kötelezettségeknek való
        megfelelés [Rendelet 6. cikk (1) bekezdés c) pont szerinti adatkezelés].
      </p>

      <br />
      <h2>Egyéb fogyasztóvédelmi panaszok kezelése</h2>
      <p>
        Az adatkezelési folyamat a fogyasztóvédelmi panaszok kezelése érdekében
        történik. Amennyiben Ön panasszal fordult hozzánk, akkor az adatkezelés
        és az adatok megadása elengedhetetlen.
      </p>
      <br />
      <h3>Kezelt adatok</h3>
      <p>
        Vásárló vezetékneve, keresztneve, telefonszáma, e-mail címe, panasz
        tartalma.
      </p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>
        A garanciális panaszokat a fogyasztóvédelemről szóló törvény alapján 5
        évig őrizzük meg.
      </p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        Az, hogy hozzánk fordul-e panasszal az Ön önkéntes döntése, azonban ha
        hozzánk fordul, a fogyasztóvédelemről szóló 1997. évi CLV. törvény 17/A.
        § (7) bekezdése alapján 5 évig köteles vagyunk a panaszt megőrizni
        [Rendelet 6. cikk (1) bekezdés c) pont szerinti adatkezelés].
      </p>

      <br />
      <h2>Marketing célú adatkezelések</h2>
      <br />
      <h3>A hírlevél-küldéssel kapcsolatos adatkezelés</h3>
      <p>Az adatkezelési folyamat a hírlevelek kiküldése érdekében történik.</p>
      <br />
      <h3>Kezelt adatok</h3>
      <p>Vezetéknév, Keresztnév, e-mail cím.</p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>Az érintett hozzájárulásának visszavonásáig.</p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        Az Ön önkéntes hozzájárulása, ami a hírlevélre történő feliratkozással
        ad meg az Adatkezelő számára [Rendelet 6. cikk (1) bekezdés a) pont
        szerinti adatkezelés]
      </p>

      <br />
      <h3>
        A személyre szabott reklámok küldésével és megjelenítésével kapcsolatos
        adatkezelés
      </h3>
      <p>
        Az adatkezelési folyamat az érintett érdeklődési körének megfelelő
        tartalmú reklámtartalom kiküldésének érdekében történik.
      </p>
      <br />
      <h3>Kezelt adatok</h3>
      <p>Vezetéknév, Keresztnév, e-mail cím.</p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>A hozzájárulásának visszavonásáig.</p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        Az Ön önkéntes, külön hozzájárulása, amit az adat felvétel során ad meg
        az Adatkezelő számára [Rendelet 6. cikk (1) bekezdés a) pont szerinti
        adatkezelés]
      </p>

      <br />
      {/* <h3>Remarketing</h3>
      <p>
        Az adatkezelés, mint remarketing tevékenység cookiek segítségével
        valósul meg.
      </p>
      <br /> */}
      <h3>Kezelt adatok</h3>
      <p>A cookie tájékoztatóban meghatározott cookiek által kezelt adatok.</p>
      <br />
      <h3>Az adatkezelés időtartama</h3>
      <p>
        Az adott cookie adattárolási időtartama, bővebb információ elérhető itt:
        Google Analytics tájékoztató, Facebook tájékoztató.
      </p>
      <br />
      <h3>Az adatkezelés jogalapja</h3>
      <p>
        az Ön önkéntes hozzájárulása, amit a weboldal használatával ad meg
        Adatkezelő számára [Rendelet 6. cikk (1) bekezdés a) pont szerinti
        adatkezelés].
      </p>

      <br />
      <h2>További adatkezelések</h2>
      <p>
        Amennyiben az Adatkezelő további adatkezelést kíván végezni, akkor
        előzetes tájékoztatást nyújt az adatkezelés lényeges körülményeiről
        (adatkezelés jogszabályi háttere és jogalapja, az adatkezelés célja, a
        kezelt adatok köre, az adatkezelés időtartama).
      </p>
      <p>
        Tájékoztatjuk Önt arról, hogy a hatóságok törvényi felhatalmazáson
        alapuló, írásbeli adatkéréseit az Adatkezelőnek teljesítenie kell. Az
        Adatkezelő az adattovábbításokról az Infotv. 15. § (2)-(3) bekezdésével
        összhangban nyilvántartást vezet (mely hatóságnak, milyen személyes
        adatot, milyen jogalapon, mikor továbbított az Adatkezelő), amelynek
        tartalmáról kérésére az Adatkezelő tájékoztatást nyújt, kivéve, ha a
        tájékoztatását törvény kizárja.
      </p>

      <br />
      <h2>A személyes adatok címzettjei</h2>
      <br />
      <h3>
        A személyes adatok tárolására és kezelésére irányuló adatfeldolgozás
      </h3>
      <p>Az adatbázis szolgáltató megnevezése: MongoDB Inc.</p>
      <p>
        Az adatbázis szolgáltató székhelye: MongoDB, Inc., 1633 Broadway, 38th
        Floor, New York, NY 10019, USA
      </p>
      <p>
        Az adatbázis szolgáltató weboldala:
        <a href="https://www.mongodb.com">mongodb.com</a>
      </p>

      <p>A backendet futtató szolgáltató megnevezése: Railway Corporation</p>
      <p>
        A backend szolgáltató székhelye: 80 Rossi Avenue, San Francisco, CA
        94118
      </p>
      <p>
        A backend szolgáltató weboldala:{" "}
        <a href="https://railway.app">railway.app</a>{" "}
      </p>

      <p>
        Minden adatfeldolgozó az Adatkezelővel kötött szerződés alapján végzi a
        személyes adatok tárolását és kezelését. A személyes adatok
        megismerésére kizárólag az Adatkezelő jogosult, kivéve, ha a
        jogszabályok másképp nem rendelkeznek. Az adatfeldolgozók biztosítják a
        személyes adatok biztonságát, és megteszik a szükséges technikai és
        szervezeti intézkedéseket az adatok védelme érdekében.
      </p>
      <br />
      <h3>Hírlevélküldéssel összefüggő adatfeldolgozói tevékenység</h3>
      <p>
        Hírlevélküldésért felelős adatfeldolgozó: Google LLC (Gmail
        szolgáltatáson keresztül)
      </p>
      <p>
        Adatfeldolgozó székhelye: 1600 Amphitheatre Parkway, Mountain View, CA
        94043, USA
      </p>
      <p>
        Adatfeldolgozó adatvédelmi tájékoztatója:{" "}
        <a href="https://policies.google.com/privacy">
          https://policies.google.com/privacy
        </a>
      </p>
      <p>
        A hírlevelek küldésére használt technológia: Node.js könyvtár (Ez a
        technológia nem tárol személyes adatokat, csak a hírlevélküldési
        folyamat megvalósítására szolgál.)
      </p>
      <p>
        A Google mint adatfeldolgozó az Adatkezelővel kötött szerződés alapján,
        vagy az Adatkezelő által nyújtott hozzájárulás alapján kezeli a
        személyes adatokat a hírlevelek küldése céljából. A személyes adatok
        megismerésére és kezelésére vonatkozóan a Google adatvédelmi
        tájékoztatója tartalmazza a részletes információkat.
      </p>

      <br />
      <h3>Számlázással kapcsolatos adatfeldolgozás</h3>
      <p>Az adatfeldolgozó megnevezése: Billingo Technologies Zrt.</p>
      <p>
        Az adatfeldolgozó székhelye: 1085 Budapest, József körút 74. I. em. 6.
      </p>
      <p>Az adatfeldolgozó telefonszáma: 36-1/500-9491</p>
      <p>Az adatfeldolgozó e-mail címe: hello@billingo.hu</p>
      <p>
        Az adatfeldolgozó weboldala:{" "}
        <a href="https://www.billingo.hu/">https://www.billingo.hu/</a>
      </p>
      <p>
        Az Adatfeldolgozó az Adatkezelővel kötött szerződés alapján közreműködik
        a számviteli bizonylatok nyilvántartásában. Ennek során az
        Adatfeldolgozó az érintett nevét és címét a számviteli nyilvántartáshoz
        szükséges mértékben, a Sztv. 169. § (2) bekezdésének megfelelő
        időtartamban kezeli, ezt követően törli.
      </p>

      <br />
      <h3>Az online fizetéssel kapcsolatos adatfeldolgozás</h3>
      <p>Az adatfeldolgozó megnevezése: Stripe Inc.</p>
      <p>
        Az adatfeldolgozó székhelye: Headquarters 185 Berry Street Suite 550 San
        Francisco, CA 94107
      </p>
      <p>Az adatfeldolgozó e-mail címe: support@stripe.com</p>
      <p>
        Az adatfeldolgozó weboldala:{" "}
        <a href="https://stripe.com/">https://stripe.com/</a>
      </p>
      <p>
        Az Adatfeldolgozó az Adatkezelővel kötött szerződés alapján közreműködik
        az Online fizetés végrehajtásában. Ennek során az Adatfeldolgozó az
        érintett számlázási nevét és címét, a rendelés számát és időpontját a
        polgári jogi elévülési időn belül kezeli.
      </p>

      <br />
      <h2>Az adatkezelés során Önt megillető jogok</h2>
      <ul>
        <li>a hozzájárulás visszavonásának joga</li>
        <li>
          személyes adatokhoz és az adatkezeléssel kapcsolatos információkhoz
          való hozzáférés
        </li>
        <li>helyesbítéshez való jog</li>
        <li>adatkezelés korlátozása,</li>
        <li>törléshez való jog</li>
        <li>tiltakozáshoz való jog</li>
        <li>hordozhatósághoz való jog.</li>
      </ul>
      <p>
        Amennyiben Ön jogaival élni kíván, az az Ön azonosításával jár együtt,
        valamint az Adatkezelőnek Önnel szükségszerűen kommunikálnia kell. Ezért
        az azonosítás érdekében személyes adatok megadására lesz szükség (de az
        azonosítás csak olyan adaton alapulhat, amelyet Adatkezelő egyébként is
        kezel Önről), valamint az Adatkezelő email fiókjában elérhetőek lesz az
        Ön adatkezeléssel kapcsolatos panasza a jelen tájékoztatóban, a
        panaszokkal kapcsolatban megjelölt időtartamon belül. Amennyiben Ön
        vásárlónk volt és panaszügyintézés, vagy garanciális ügyintézés
        érdekében szeretné magát azonosítani, az azonosításhoz kérjük adja meg
        rendelési azonosítóját is. Ennek felhasználásával Önt, mint vásárlót is
        be tudjuk azonosítani.
      </p>
      <p>
        Az adatkezeléssel kapcsolatos panaszokat legkésőbb 30 napon belül
        válaszolja meg Adatkezelő.
      </p>

      <br />
      <h3>A hozzájárulás visszavonásának joga</h3>
      <p>
        Ön bármikor jogosult az adatkezeléshez adott hozzájárulást visszavonni,
        ilyen esetben a megadott adatokat rendszereinkből töröljük. Kérjük
        azonban vegye figyelembe, hogy a még nem teljesített megrendelés esetén
        a visszavonás azzal a következménnyel járhat, hogy nem tudjuk Ön felé
        teljesíteni a kiszállítást. Emellett, ha a vásárlás már megvalósult, a
        számviteli előírások alapján a számlázással kapcsolatos adatokat nem
        törölhetjük rendszereinkből, valamint ha Önnek tartozása áll fenn
        felénk, akkor a követelés behajtásával kapcsolatos jogos érdek alapján
        adatait a hozzájárulás visszavonása esetén is kezelhetjük.
      </p>

      <br />
      <h3>A személyes adatokhoz való hozzáférés</h3>
      <p>
        Ön jogosult arra, hogy az Adatkezelőtől visszajelzést kapjon arra
        vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e, és ha
        adatkezelés folyamatban van, jogosult arra, hogy a kezelt személyes
        adatokhoz hozzáférést kapjon és a következő információkról az Adatkezelő
        tájékoztassa:
      </p>
      <ul>
        <li>az adatkezelés céljai;</li>
        <li>az Önről kezelt személyes adatok kategóriái;</li>
        <li>
          információ azon címzettekről vagy címzettek kategóriáiról, akikkel,
          illetve amelyekkel a személyes adatokat Adatkezelő közölte vagy
          közölni fogja;
        </li>
        <li>
          a személyes adatok tárolásának tervezett időtartama, vagy ha ez nem
          lehetséges, ezen időtartam meghatározásának szempontjai;
        </li>
        <li>
          az Ön azon joga, hogy kérelmezheti az Adatkezelőtől az Önre vonatkozó
          személyes adatok helyesbítését, törlését vagy kezelésének
          korlátozását, és jogos érdeken alapuló adatkezelés esetén tiltakozhat
          az ilyen személyes adatok kezelése ellen;
        </li>
        <li>a felügyeleti hatósághoz címzett panasz benyújtásának joga;</li>
        <li>
          ha az adatokat nem Öntől gyűjtötték be, a forrásukra vonatkozó minden
          elérhető információ;
        </li>
        <li>
          az automatizált döntéshozatal tényéről (ha alkalmazott ilyen eljárás),
          ideértve a profilalkotást is, valamint legalább ezekben az esetekben
          az alkalmazott logikára és arra vonatkozóan érthető információkat,
          hogy az ilyen adatkezelés milyen jelentőséggel, és Önre nézve milyen
          várható következményekkel bír.
        </li>
      </ul>
      <p>
        A jog gyakorlásának célja az adatkezelés jogszerűségének megállapítására
        és ellenőrzésére irányulhat, ezért többszöri tájékoztatás kérés esetén
        Adatkezelő méltányos költségtérítést számolhat fel a tájékoztatás
        teljesítéséért cserébe.
      </p>
      <p>
        A személyes adatokhoz való hozzáférést Adatkezelő úgy biztosítja, hogy
        az Ön azonosítását követően e-mailben juttatja el Önhöz a kezelt
        személyes adatokat és az információkat.
      </p>
      <p>
        Kérjük, hogy kérelmében jelölje meg, hogy a személyes adatokhoz kér
        hozzáférést, vagy az adatkezeléssel kapcsolatos információkat kéri.
      </p>

      <br />
      <h3>Helyesbítéshez való jog</h3>
      <p>
        Ön jogosult arra, hogy kérésére Adatkezelő késedelem nélkül helyesbítse
        az Önre vonatkozó pontatlan személyes adatokat.
      </p>

      <br />
      <h3>Adatkezelés korlátozásához való jog</h3>
      <p>
        Ön jogosult arra, hogy kérésére Adatkezelő korlátozza az adatkezelést,
        ha az alábbiak valamelyike teljesül:
      </p>
      <ul>
        <li>
          Ön vitatja a személyes adatok pontosságát, ez esetben a korlátozás
          arra az időtartamra vonatkozik, amely lehetővé teszi, hogy Adatkezelő
          ellenőrizze a személyes adatok pontosságát, ha a pontos adat azonnal
          megállapítható, akkor nem kerül sor a korlátozásra;
        </li>
        <li>
          az adatkezelés jogellenes, de Ön ellenzi az adatok törlését bármely
          okból (például azért mert az Ön számára jogi igény érvényesítése miatt
          fontosak az adatok), ezért nem az adatok törlését kéri, hanem ehelyett
          kéri azok felhasználásának korlátozását;
        </li>
        <li>
          az Adatkezelőnek már nincs szüksége a személyes adatokra a megjelölt
          adatkezelés céljából, de Ön igényli azokat jogi igények
          előterjesztéséhez, érvényesítéséhez vagy védelméhez; vagy
        </li>
        <li>
          Ön tiltakozott az adatkezelés ellen, de Adatkezelő jogos érdeke is
          megalapozhatja az adatkezelést, ez esetben amíg megállapításra nem
          kerül, hogy Adatkezelő jogos indokai elsőbbséget élveznek-e az Ön
          jogos indokaival szemben, az adatkezelést korlátozni kell.
        </li>
      </ul>
      <p>
        Ha az adatkezelés korlátozás alá esik, az ilyen személyes adatokat a
        tárolás kivételével csak az érintett hozzájárulásával, vagy jogi igények
        előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy más
        természetes vagy jogi személy jogainak védelme érdekében, vagy az Unió,
        illetve valamely tagállam fontos közérdekéből lehet kezelni.
      </p>
      <p>
        Adatkezelő az adatkezelés korlátozásának feloldásáról előzetesen
        (legalább a korlátozás feloldását megelőző 3 munkanappal) tájékoztatja
        Önt.
      </p>

      <br />
      <h3>Törléshez - elfeledtetéshez való jog</h3>
      <p>
        Ön jogosult arra, hogy Adatkezelő indokolatlan késedelem nélkül törölje
        az Önre vonatkozó személyes adatokat, ha az alábbi indokok valamelyike
        fennáll:
      </p>
      <ul>
        <li>
          a személyes adatokra már nincs szükség abból a célból, amelyből azokat
          Adatkezelő gyűjtötte vagy más módon kezelte;
        </li>
        <li>
          Ön visszavonja hozzájárulását és az adatkezelésnek nincs más
          jogalapja;
        </li>
        <li>
          Ön tiltakozik a jogos érdeken alapuló adatkezelés ellen, és nincs
          elsőbbséget élvező jogszerű ok (azaz jogos érdek) az adatkezelésre,
        </li>
        <li>
          a személyes adatokat Adatkezelő jogellenesen kezelte és ez a panasz
          alapján megállapítást nyert,
        </li>
        <li>
          a személyes adatokat az Adatkezelőre alkalmazandó uniós vagy tagállami
          jogban előírt jogi kötelezettség teljesítéséhez törölni kell.
        </li>
      </ul>
      <p>
        Ha az Adatkezelő bármely jogszerű oknál fogva nyilvánosságra hozta az
        Önről kezelt személyes adatot, és bármely fent megjelölt okból törölni
        köteles azt, az elérhető technológia és a megvalósítás költségeinek
        figyelembevételével köteles megtenni az észszerűen elvárható lépéseket –
        ideértve technikai intézkedéseket – annak érdekében, hogy tájékoztassa
        az adatokat kezelő más adatkezelőket, hogy Ön kérelmezte a szóban forgó
        személyes adatokra mutató linkek vagy e személyes adatok másolatának,
        illetve másodpéldányának törlését.
      </p>
      <p>A törlés nem alkalmazandó, amennyiben az adatkezelés szükséges:</p>
      <ul>
        <li>
          a véleménynyilvánítás szabadságához és a tájékozódáshoz való jog
          gyakorlása céljából;
        </li>
        <li>
          a személyes adatok kezelését előíró, az adatkezelőre alkalmazandó
          uniós vagy tagállami jog szerinti kötelezettség teljesítése (ilyen
          eset a számlázás keretében megvalósuló adatkezelés, mivel a számla
          megőrzését jogszabály írja elő), illetve közérdekből vagy az
          adatkezelőre ruházott közhatalmi jogosítvány gyakorlása keretében
          végzett feladat végrehajtása céljából;
        </li>
        <li>
          jogi igények előterjesztéséhez, érvényesítéséhez, illetve védelméhez
          (pl.: ha Adatkezelőnek Ön felé követelése áll fenn és azt még nem
          teljesítette, vagy fogyasztói, adatkezelési panasz intézése van
          folyamatban).
        </li>
      </ul>

      <br />
      <h3>Tiltakozáshoz való jog</h3>
      <p>
        Ön jogosult arra, hogy a saját helyzetével kapcsolatos okokból bármikor
        tiltakozzon személyes adatainak jogos érdeken alapuló kezelése ellen.
        Ebben az esetben Adatkezelő a személyes adatokat nem kezelheti tovább,
        kivéve, ha az bizonyítja, hogy az adatkezelést olyan kényszerítő erejű
        jogos okok indokolják, amelyek elsőbbséget élveznek az Ön érdekeivel,
        jogaival és szabadságaival szemben, vagy amelyek jogi igények
        előterjesztéséhez, érvényesítéséhez vagy védelméhez kapcsolódnak. Ha a
        személyes adatok kezelése közvetlen üzletszerzés érdekében történik, Ön
        jogosult arra, hogy bármikor tiltakozzon az Önre vonatkozó személyes
        adatok e célból történő kezelése ellen, ideértve a profilalkotást is,
        amennyiben az a közvetlen üzletszerzéshez kapcsolódik. Ha Ön tiltakozik
        a személyes adatok közvetlen üzletszerzés érdekében történő kezelése
        ellen, akkor a személyes adatok a továbbiakban e célból nem kezelhetők.
      </p>

      <br />
      <h3>Hordozhatósághoz való jog</h3>
      <p>
        Amennyiben az adatkezelés automatizált módon valósul meg, vagy ha az
        adatkezelés az Ön önkéntes hozzájárulásán alapul, Önnek joga van arra,
        hogy kérje Adatkezelőtől, hogy az Ön által az Adatkezelő részére
        megadott adatokat megkapja, amit Adatkezelő xml, JSON, vagy CSV
        formátumban bocsát az Ön rendelkezésére, ha ez technikailag
        megvalósítható, akkor kérheti, hogy az Adatkezelő az adatokat ebben a
        formában más adatkezelő számára továbbítsa.
      </p>

      <br />
      <h3>Automatizált döntéshozatal</h3>
      <p>
        Ön jogosult arra, hogy ne terjedjen ki Önre az olyan, kizárólag
        automatizált adatkezelésen alapuló döntés hatálya (ideértve a
        profilalkotást is), amely Önre nézve joghatással járna vagy Önt
        hasonlóképpen jelentős mértékben érintené. Ezekben az esetekben
        Adatkezelő köteles megfelelő intézkedéseket tenni az érintett jogainak,
        szabadságainak és jogos érdekeinek védelme érdekében, ideértve az
        érintettnek legalább azt a jogát, hogy az adatkezelő részéről emberi
        beavatkozást kérjen, álláspontját kifejezze, és a döntéssel szemben
        kifogást nyújtson be.
      </p>
      <p>A fentiek nem alkalmazandóak abban az esetben, ha a döntés:</p>
      <ul>
        <li>
          Ön és az adatkezelő közötti szerződés megkötése vagy teljesítése
          érdekében szükséges;
        </li>
        <li>
          meghozatalát az adatkezelőre alkalmazandó olyan uniós vagy tagállami
          jog teszi lehetővé, amely Ön jogainak és szabadságainak, valamint
          jogos érdekeinek védelmét szolgáló megfelelő intézkedéseket is
          megállapít; vagy
        </li>
        <li>az Ön kifejezett hozzájárulásán alapul.</li>
      </ul>
      <br />
      <h2>Adatbiztonsági intézkedések</h2>
      <p>
        Az Adatkezelő kijelenti, hogy megfelelő biztonsági intézkedéseket hozott
        annak érdekében, hogy a személyes adatok védje a jogosulatlan
        hozzáférés, megváltoztatás, továbbítás, nyilvánosságra hozatal, törlés
        vagy megsemmisítés, valamint a véletlen megsemmisülés és sérülés,
        továbbá az alkalmazott technika megváltozásából fakadó
        hozzáférhetetlenné válás ellen.
      </p>
      <p>
        Az Adatkezelő a szervezeti és technikai lehetőségekhez képest mindent
        megtesz annak érdekében, hogy adatfeldolgozói is megfelelő
        adatbiztonsági intézkedéseket tegyenek, amikor az Ön személyes adataival
        dolgoznak.
      </p>

      <br />
      <h2>Jogorvoslati lehetőségek</h2>
      <p>
        Amennyiben Ön szerint az Adatkezelő megsértette valamely, az
        adatkezelésre vonatkozó törvényi rendelkezést, vagy nem teljesítette
        valamely kérelmét, akkor vélelmezett jogellenes adatkezelés
        megszüntetése érdekében a Nemzeti Adatvédelmi és Információszabadság
        Hatóság vizsgálati eljárását kezdeményezheti (levelezési cím: 1363
        Budapest, Pf. 9., e-mail: ugyfelszolgalat@naih.hu).
      </p>
      <p>
        Tájékoztatjuk emellett arról is, hogy az adatkezelésre vonatkozó
        törvényi rendelkezések megsértése esetén, vagy ha az Adatkezelő nem
        teljesítette valamely kérelmét, akkor az Adatkezelővel szemben polgári
        pert indíthat bíróság előtt.
      </p>

      <br />
      <h2>Adatkezelési tájékoztató módosítása</h2>
      <p>
        Az Adatkezelő fenntartja a jogot, hogy jelen adatkezelési tájékoztatót
        az adatkezelés célját és jogalapját nem érintő módon módosítsa. A honlap
        módosítás hatálybalépését követő használatával elfogadja a módosított
        adatkezelési tájékoztatót.
      </p>
      <p>
        Amennyiben az Adatkezelő a gyűjtött adatokkal kapcsolatban a gyűjtésük
        céljától eltérő célból további adatkezelést kíván végezni a további
        adatkezelést megelőzően tájékoztatja Önt az adatkezelés céljáról és az
        alábbi információkról:
      </p>
      <ul>
        <li>
          a személyes adatok tárolásának időtartamáról, vagy ha ez nem
          lehetséges, akkor az időtartam meghatározásának szempontjairól;
        </li>
        <li>
          azon jogáról, hogy kérelmezheti az Adatkezelőtől az Önre vonatkozó
          személyes adatokhoz való hozzáférést, azok helyesbítését, törlését
          vagy kezelésének korlátozását, és jogos érdeken alapuló adatkezelés
          esetén tiltakozhat a személyes adatok kezelése ellen, valamint a
          hozzájáruláson, vagy szerződéses kapcsolaton alapuló adatkezelés
          esetén kérheti az adathordozhatósághoz való jog biztosítását;
        </li>
        <li>
          hozzájáruláson alapuló adatkezelés esetén arról, hogy a hozzájárulást
          Ön bármikor visszavonhatja,
        </li>
        <li>a felügyeleti hatósághoz címzett panasz benyújtásának jogáról;</li>
        <li>
          arról, hogy a személyes adat szolgáltatása jogszabályon vagy
          szerződéses kötelezettségen alapul vagy szerződés kötésének
          előfeltétele-e, valamint hogy az Ön köteles-e a személyes adatokat
          megadni, továbbá hogy milyen lehetséges következményeikkel járhat az
          adatszolgáltatás elmaradása;
        </li>
        <li>
          az automatizált döntéshozatal tényéről (ha alkalmazott ilyen eljárás),
          ideértve a profilalkotást is, valamint legalább ezekben az esetekben
          az alkalmazott logikára és arra vonatkozóan érthető információkat,
          hogy az ilyen adatkezelés milyen jelentőséggel, és Önre nézve milyen
          várható következményekkel bír.
        </li>
      </ul>
      <p>
        Az adatkezelés csak ezt követően kezdődhet meg, amennyiben az
        adatkezelés jogalapja hozzájárulás, az adatkezeléshez a tájékoztatáson
        felül Önnek hozzá is kell járulnia. A jelen dokumentum a webshop
        működésével kapcsolatban minden releváns adatkezelési információt
        tartalmaz az Európai Unió 2016/679 számú Általános Adatvédelmi Rendelete
        (a továbbiakban: Rendelet. GDPR) és a 2011. évi CXII. tv. (a
        továbbiakban: Infotv.) alapján.
      </p>
      <br />
      <p>Hatályos: 2024. 01. 14.</p>
    </div>
  );
};

export default AdatkezelesiTajekoztato;
