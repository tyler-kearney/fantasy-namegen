// The elements from the document. 
const raceSelect = document.getElementById('race');
const nameSelect = document.getElementById('name-selection');
const firstBaseIn = document.getElementById('firstname-base');
const lastBaseIn = document.getElementById('lastname-base');
const relevenceScoreIn = document.getElementById('relevance-score');
const numNamesIn = document.getElementById('num-names');
const genBtn = document.getElementById('gen-btn');
const nameOutput = document.getElementById('name-results');

// Arrays for each of the races
const dwarfMaleNames = ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brotter', 'Bruenor', 'Dain', 'Darrak', 'Delg', 'Eberk', 'Einkil',
'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak', 'Morgran', 'Orsik', 'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 
'Thorin', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Veit', 'Vondal'];
const dwarfFemaleNames = ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn', 'Finellen', 'Gunnloda',
'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Kristryd', 'Ilde', 'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera', 'Torgga', 'Vistra'];
const dwarfClans = ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist',
'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'];

const elfMaleNames = ['Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro', 'Barrien', 'Carric', 'Enialis', 'Erdan', 'Erevan',
'Galinndan', 'Hadarai', 'Heian','Himo', 'Immeral', 'Ivellios', 'Laucian', 'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon',
'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis'];
const elfFemaleNames = ['Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Bthrynna', 'Birel', 'Caelynn', 'Drusilia',
'Enna', 'Felosial', 'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele', 'Mialee', 'Naivara', 'Quelenna', 'Quillathe',
'Sariel', 'Shanairra', 'Shava','Silaqui', 'Theirastra', 'Thia', 'Vadania', 'Valanthe', 'Xanaphia'];
const elfFamilyNames = ['Amakiir', 'Amastacia', 'Galanodel', 'Holimion', 'Ilphelkiir', 'Liadon', 'Meliamne', 'Nailo', 'Siannodel',
'Xiloscient'];

const halflingMaleNames = ['Alton', 'Ander', 'Cade', 'Corrin', 'Eldon', 'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric', 
'Milo', 'Osborne', 'Perrin', 'Reed','Roscoe', 'Wellby'];
const halflingFemaleNames = ['Andry', 'Bree', 'Callie', 'Cora', 'Euphemia', 'Jillian', 'Kithree', 'Lavinia', 'Lidda', 'Merla', 'Nedda',
'Paela', 'Portia', 'Seraphina', 'Shaena', 'Trym', 'Vani', 'Verna'];
const halflingFamilyNames = ['Brushgather', 'Goodbarrel', 'Greenbottle', 'High-Hill', 'Hilltopple', 'Leagallow', 'Tealeaf', 'Thorngage',
'Tosscobble', 'Underbough'];

// Will add more human names as I go, possibly have to split human
const humanMaleNames = ['Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim', 'Gelm', 'Malark', 'Morn', 'Randal', 'Stedd'];
const humanFemaleNames = ['Arveene', 'Esvele', 'Jhessail', 'Kerri', 'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele'];
const humanSurnames = ['Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag'];

const dragonbornMaleNames = ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv', 'Medrash', 'Mehen', 'Nadarr', 
'Pandjed', 'Patrin', 'Rhogar', 'Shamash', 'Shedinn', 'Tarhun', 'Torinn'];
const dragonbornFemaleNames = ['Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri', 'Kava', 'Korinn', 'Mishann', 'Nala', 
'Perra', 'Raiann', 'Sora', 'Surina', 'Thava', 'Uadjit'];
const dragonbornClanNames = ['Clethinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion', 'Fenkenkabradon', 'Kepeshkmolik', 
'Kerrhylon', 'Kimbatuul', 'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Prexijandilin', 'Shestendeliath',
'Turnuroth', 'Verthisathurgiesh', 'Yarjerit'];

const gnomeMaleNames = ['Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell', 'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo',
'Gimble', 'Glim', 'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri', 'Warryn', 'Wrenn', 'Zook'];
const gnomeFemaleNames = ['Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella', 'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli',
'Loopmottin', 'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Shamil', 'Tana', 'Waywocket', 'Zanna'];
const gnomeClanNames = ['Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig', 'Ningel', 'Raulnor', 'Scheppen', 'Timbers', 'Tiren'];

const tieflingMaleNames = ['Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon', 'Leucis', 'Melech', 'Mordai',
'Morthos', 'Pelaios', 'Skamos', 'Therai'];
const tieflingFemaleNames = ['Asta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista', 'Lerissa', 'Makaria', 'Nemeia',
'Orianna', 'Phelaia', 'Rieta'];
const tieflingVirtueNames = ['Art', 'Carrion', 'Chant', 'Creed', 'Despair', 'Excellence', 'Fear', 'Glory', 'Hope', 'Ideal', 'Music',
'Nowhere', 'Open', 'Poetry', 'Quest', 'Random', 'Reverence', 'Sorrow', 'Temerity', 'Torment', 'Weary'];

// Filters
function relevanceFilter(nameArr, relevanceScore) {
    
}