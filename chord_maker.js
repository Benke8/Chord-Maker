setSize(200,600);
var WIDTH = getWidth();
var HEIGHT = getHeight();
var chordMarkers = [0,0,0,0,0,0];
var stringDistance = 28;
var fretDistance = 40;

//the information needed for the definition of the chord arrays was taken from
//https://github.com/justindarc/raphael.chord.js

//define all chord arrays for root A
var aMaj = ["-102220", "54222-1", "577655","9-17910-1", "-1-179109", "12-111910-1", "-112119109"];
var aFive = ["-1022-1-1", "-102255", "577-1-1-1", "-1-17910-1", "0","0","0"];
var aSix = ["-102222", "5-1462-1","57-1675","0","0","0", "0"];
var aSeven = ["-102020","-102221","575655", "57-168-1", "-1-17889", "-110-19109", "0"];
var aMajSeven = ["-102120", "-102224","-1-17654", "-11211999", "0", "0", "0"];
var aNine = ["-102423", "54545-1","575657","-11211121212", "0", "0", "0"];
var aMajNine = ["-102424", "5-166-17", "0", "0", "0", "0", "0"];
var aEleven = ["-102424","555657", "-1-17789", "-11211121010", "0", "0", "0"];
var aThirteen = ["-102022", "-1-15222", "575675", "0", "0", "0", "0"];
var aMajThirteen = ["-102122", "544454", "0", "0", "0", "0", "0"];
var aMin = ["-102210", "-13225-1", "577555", "-1-17558", "-1710910-1","-1-179108","-11210910-1"];
var aMinSix = ["-102212", "5-14555", "-1-17978", "0", "0", "0", "0"];
var aMinSeven = ["-102010", "575585", "5-1555-1", "-11210121012", "0", "0", "0"];
var aMinNine = ["532000", "-102410", "-105500", "5-15557", "0", "0", "0"];
var aMinEleven = ["-100010", "-177788", "0", "0", "0", "0","0"];
var aMinThirteen = ["-102214", "575575", "0","0", "0", "0", "0"];

//define all chord arrays for root Bb
var bbMaj = ["-113331", "65333-1", "-1-13336", "688766", "10-18101101", "-1-18101110", "0"];
var bbFive = ["-1133-1-1", "-1-13366", "688-1-1-1", "-1-181011-1", "0", "0", "0"];
var bbSix = ["-113333", "653333", "6-1576-1", "68-1786", "0", "0", "0"];
var bbSeven = ["-113131", "4-1333-1", "-113334", "686766", "68-179-1", "-1-1810910", "0"];
var bbMajSeven = ["-113231", "-1-18765", "6-1776-1", "-1-18101010", "0", "0", "0"];
var bbNine = ["-110111", "6-1653-1", "686768", "10-181098", "0", "0", "0"];
var bbMajNine = ["-110211", "6-177-18", "0", "0", "0", "0", "0"];
var bbEleven = ["-111131", "666768", "-1-188910", "10-1-110911", "0", "0", "0"];
var bbThirteen = ["-11-1133", "686786", "6-16788", "0", "0", "0", "0"];
var bbMajThirteen = ["-11-1233", "6-17788", "0", "0", "0", "0", "0"];
var bbMin = ["-113321", "-1-13666", "-14336-1", "688666", "-1-18669", "-1-1810119", "0"];
var bbMinSix = ["-11302-1", "6-1566-1", "688686", "0", "0", "0", "0"];
var bbMinSeven = ["-113121", "686696", "6-1666-1", "-1-181099", "0", "0", "0"];
var bbMinNine = ["6-16696", "0", "0", "0", "0", "0", "0"];
var bbMinEleven = ["-111121", "-188899", "0", "0", "0", "0", "0"];
var bbMinThirteen = ["-11-1123", "686686","0", "0", "0", "0", "0"];

//define all chord arrays for root B
var bMaj = ["-124442", "76444-1", "-1-14447", "799877", "11-191112-1", "-1-19111211", "0"];
var bFive = ["-1244-1-1", "-1-14477", "799-1-1-1", "-1-191112-1", "0", "0", "0"];
var bSix = ["22110-1", "-124444", "7-1687-1", "79-1897", "0", "0", "0"];
var bSeven = ["-121202", "-124445", "-124242", "797877", "7978107", "-1-19111011", "0"];
var bMajSeven = ["22130-1", "-124342", "-1-19876", "7-1887-1", "0", "0", "0"];
var bNine = ["-121222", "7-1764-1", "7676-1-1", "797879", "0", "0", "0"];
var bMajNine = ["-121322", "7-188-19", "0", "0", "0", "0", "0"];
var bEleven = ["-121220", "-111131", "777879", "-1-1991011", "0", "0", "0"];
var bThirteen = ["-121224", "-12-1224", "7-1789-1", "0", "0", "0", "0"];
var bMajThirteen = ["-12-1344", "7-1889-1", "0", "0", "0", "0", "0"];
var bMin = ["-124432", "-15443-1", "-1547-1", "799777", "-19121112-1", "-1-191112-1", "-1-19111210", "10-191112-1"];
var bMinSix = ["-12-1132", "-124-134", "7-16777", "799797", "0", "0", "0"];
var bMinSeven = ["-120202", "-124232", "7-1777-1", "7977107", "0", "0", "0"];
var bMinNine = ["-120222", "7-177710", "0", "0", "0", "0", "0"];
var bMinEleven = ["-122232", "777777", "0", "0", "0", "0", "0"];
var bMinThirteen = ["-12-1234", "797797", "0", "0", "0", "0", "0"];

//define all chord arrays for root C
var cMaj = ["-132010", "332010", "335553", "87555-1", "-1-1555-1", "-1-15558", "81010988", "0"];
var cFive = ["-1355-1-1", "-1-15588", "81010-1-1-1", "0", "0", "0", "0"];
var cSix = ["3-1221-1", "-135555", "8-1798-1", "810-19108", "0", "0", "0"];
var cSeven = ["-132310", "-135353", "810-1911-1", "8108988", "12-1101211-1", "-1-110121112", "0"];
var cMajSeven = ["-132000", "-135453", "-1-110987", "810-191212", "0", "0", "0"];
var cNine = ["-132333", "8-1875-1", "81089810", "-1-11091110", "0", "0", "0"];
var cMajNine = ["-135430", "-1710787", "0", "0", "0", "0", "0"];
var cEleven = ["-132311", "-133353", "-17-1566", "-1-110101112", "0", "0", "0"];
var cThirteen = ["-11221-1", "8-18755", "-1-189107", "8-18910-1", "0", "0", "0"];
var cMajThirteen = ["-13-1455", "877787", "0", "0", "0", "0", "0"];
var cMin = ["-13101-1", "-135543", "-16554-1", "-1-15888", "-16558-1", "81010888", "0"];
var cMinSix = ["-101013", "-13-1243", "8-1788-1", "810108108", "0", "0", "0"];
var cMinSeven = ["-1-11313", "-135343", "8-1888-1", "810108108", "0", "0", "0"];
var cMinNine = ["-13133-1", "-168788", "0", "0", "0", "0", "0"];
var cMinEleven = ["-133343", "8-1886-1", "0", "0", "0", "0","0"];
var cMinThirteen = ["-13-1345", "81088108", "0", "0", "0", "0", "0"];

//define all chord arrays for root C#
var csMaj = ["-143121", "-146664", "98666-1", "-1-16669", "911111099", "0", "0"];
var csFive = ["-1-1-1124", "-1466-1-1", "-1-16699", "91111-1-1-1", "0", "0", "0"];
var csSix = ["-1-13324", "146666", "9-18109-1", "0", "0", "0", "0"];
var csSeven = ["-14342-1", "-146464", "-146667", "91191099", "0", "0", "0"];
var csMajSeven = ["-143111", "-146564", "-1-1111098", "9-110109-1", "0", "0", "0"];
var csNine = ["-143444", "9-1986-1", "9898-1-1", "911910911", "0", "0", "0"];
var csMajNine = ["-141111", "9-11010-111", "0", "0", "0", "0", "0"];
var csEleven = ["-143422", "-144464", "9-19107-1", "-1991099", "0", "0", "0"];
var csThirteen = ["-143446", "9-19866", "-1-1910119", "9-191011-1", "0", "0", "0"];
var csMajThirteen = ["-14-1566", "988898", "0", "0", "0", "0", "0"];
var csMin = ["-14212-1", "-1-12120", "-146654", "-17669-1", "91111999", "-1-1119912", "0"];
var csMinSix = ["-14-1354", "-142324", "9-1899-1", "911119119", "0", "0", "0"];
var csMinSeven = ["-142100", "-14-1454", "9-1999-1", "91199129", "0", "0", "0"];
var csMinNine = ["-14244-1", "9-199911", "0", "0", "0", "0", "0"];
var csMinEleven = ["-141441", "-144454", "0", "0","0", "0", "0"];
var csMinThirteen = ["-11-1123", "91199119", "0", "0", "0", "0","0"];

//define all chord arrays for root D
var dMaj = ["-1-10232", "-1-14245", "-154232", "-154232", "-157775", "109777-1", "-1-177710", "101212111010"];
var dFive = ["-1-1023-1", "-1577-1-1", "-1-1771010", "101212-1-1-1", "0", "0", "0"];
var dSix = ["-1-10202", "-157777","10-191110-1", "1012-1111210", "0", "0","0"];
var dSeven = ["-1-10212", "-15453-1", "-1-14535", "-157778", "-157575", "101210111010", "0"];
var dMajSeven = ["-154222", "-157675", "-1-17779", "-1-112111-9", "0","0","0"];
var dNine = ["-154210", "-154555", "10-11097-1", "101210111012", "0", "0","0"];
var dMajNine = ["-152222", "10-11111-112", "0","0","0","0","0"];
var dEleven = ["-1-10012","-154533", "-155575","-19-1788","0","0","0"];
var dThirteen = ["-13443-1","-15-1577","-1-110777", "10-110111212","0","0","0"];
var dMajThirteen = ["-15-1677", "10999109", "0", "0", "0", "0", "0"];
var dMin = ["-1-10231", "-15323-1", "-157765","-18776-1","-187710-1", "-1-17101010", "101212101010"];
var dMinSix = ["-1-10201", "-157-168", "-153435", "10-191010-1", "0","0","0"];
var dMinSeven = ["-1-10211","-157565","-1-17768","10-1101010-1","0","0","0"];
var dMinNine = ["-15355-1", "10-110101012", "0", "0", "0", "0", "0"];
var dMinEleven = ["-1-10011", "-155565", "0", "0", "0", "0", "0"];
var dMinThirteen = ["-1-10411", "101210101210", "0", "0", "0","0", "0"];

//define all chord arrays for root D#
var dsMaj = ["-1-11343", "-165343", "-1-15346","-168886","-1-188811", "1110888-1","0"];
var dsFive = ["-1-1134-1", "-1688-1-1", "-1-1881111", "0", "0", "0", "0"];
var dsSix = ["-1-11313", "-168888", "-11010811-1", "11-1101211-1", "0", "0", "0"];
var dsSeven = ["-1-11323", "-14-1343", "-168686", "-168889", "-11011811-1", "0", "0"];
var dsMajSeven = ["-1-11333", "-165333", "-168786", "0", "0", "0", "0"];
var dsNine = ["-1-11021", "-165666", "-1-1109810", "0", "0", "0","0"];
var dsMajNine = ["-1-11031", "-163333", "0", "0", "0", "0", "0"];
var dsEleven = ["-1-11123", "445644", "-165644", "-165644", "-166686"];
var dsThirteen = ["-14554-1", "-165668", "-1-111888", "0", "0", "0", "0"];
var dsMajThirteen = ["-121344", "111010101110", "0", "0", "0", "0","0"];
var dsMin = ["2-1134-1", "-11434-1", "-16434-1", "-168876", "-19887-1", "-1-18111111", "0"];
var dsMinSix = ["-1-11312", "-13434-1", "-16-1576", "11-1101111-1", "0", "0", "0", "0"];
var dsMinSeven = ["-1-11322", "-14434-1", "-168676", "11-1111111-1", "0", "0", "0"];
var dsMinNine = ["2-11321", "0", "0", "0", "0", "0", "0"];
var dsMinEleven = ["-111122", "111111111111", "0", "0", "0", "0", "0"];
var dsMinThirteen = ["-16-1678", "0", "0", "0","0", "0", "0"];

//define all chord arrays for root E
var eMaj = ["022100", "022454", "-176454", "-1-16457", "-179997", "1211999-1", "-1-199912"];
var eFive = ["022-1-1-1", "-1-1245-1", "-1799-1-1", "-1-1991212", "0", "0", "0"];
var eSix = ["-1-12424", "022120", "-179999", "-11111912-1", "0", "0", "0"];
var eSeven = ["020100", "022130", "4-1243-1", "-17675-1", "-179797", "-1799910", "0"];
var eMajSeven = ["021100", "-176444", "-1-199911", "0","0", "0","0"];
var eNine = ["4-12432", "020102", "-176777", "12-112119-1", "0", "0", "0"];
var eMajorNine = ["024444", "-174444", "0", "0", "0", "0", "0"];
var eEleven = ["002132", "-1-12234", "-176755", "-177797", "0", "0", "0"];
var eThirteen = ["020122", "-15665-1", "-17-1799", "0", "0", "0", "0"];
var eMajThirteen = ["020122", "121111111211", "0", "0", "0", "0", "0"];
var eMin = ["022000", "-1-12453", "-1-15453", "-17545-1", "-179987", "-110998-1", "-1-19121212"];
var eMinSix = ["022020", "-175657", "-17-1687", "12-1111212-1", "0", "0", "0"];
var eMinSeven = ["020000", "022030", "-179787", "-17-1787", "0", "0", "0"];
var eMinNine = ["020002", "-17577-1", "0", "0", "0", "0", "0"];
var eMinEleven = ["000000", "-177787", "0", "0","0","0","0"];
var eMinThirteen = ["020022", "-17-1789", "0", "0", "0", "0", "0"];

//define all chord arrays for root F
var fMaj = ["133211", "5-1356-1", "-187565", "8-1756-1", "-1-17568" ,"-181010108", "0"];
var fFive = ["133-1-1-1", "-1-1356-1", "-181010-1-1", "-181010-1-1", "0", "0","0", "0"];
var fSix = ["13-123-1", "-1-13535", "-1810710-1", "0", "0","0", "0"];
var fSeven = ["131211", "13-124-1", "-1-13545", "-18786-1", "-18108108", "-1810101011", "0"];
var fMajSeven = ["1-1221-1", "1-13555", "-187555", "-18109108", "0", "0", "0"];
var fNine = ["131213", "-187888", "0", "0", "0", "0", "0"];
var fMajNine = ["-10201-1", "-185555", "0", "0", "0", "0","0"];
var fEleven = ["111213", "-1-13345", "667866", "-187866", "0", "0", "0"];
var fThirteen = ["131231", "-1878810", "0", "0", "0", "0","0"];
var fMajThirteen = ["1-1223-1", "0", "0", "0", "0", "0", "0"];
var fMin = ["133111", "-1-13564", "-1-16564", "-18656-1","-18101098", "-11110109-1", "-111101013-1"];
var fMinSix = ["-1-10111", "-1-13534", "-18-1798", "0","0","0","0"];
var fMinSeven = ["133141","-18654-1", "-1-16868","-1810898","0","0","0"];
var fMinNine = ["1-11113", "-18688-1","0","0","0","0","0"];
var fMinEleven = ["-111111","-186886","0","0","0","0","0"];
var fMinThirteen = ["131131", "-1868810", "0", "0","0", "0", "0"];

//define all chord arrays for root F#
var fsMaj = ["244322", "6-1467-1", "-1-14676", "9-1867-1", "-198676", "-191111119", "0"];
var fsFive = ["244-1-1-1", "-1-1467-1", "-191111-1-1", "-1-111111414", "0", "0", "0"];
var fsSix = ["24-134-1", "2-1132-1", "-1911811-1", "-1911111111", "0", "0", "0"];
var fsSeven = ["-1-14320", "242322", "24-135-1", "-1-14656", "-1911111112", "-19119119", "0"];
var fsMajSeven = ["-1-14321", "2-1332-1", "-198666", "-191110119", "0"];
var fsNine = ["-1-14353", "-112122", "-198999", "0","0", "0","0"];
var fsMajNine = ["2-133-14", "-196666", "0","0","0","0","0"];
var fsEleven = ["222324", "-1-14456", "778977","-198977","0","0","0"];
var fsThirteen = ["-1-12342", "2-12344", "242342", "0", "0", "0", "0"];
var fsMajThirteen = ["211121", "-19-1101111", "0", "0", "0", "0", "0"];
var fsMin = ["244222", "-1-14225", "5-1467-1", "-1-14675", "-19767-1", "-191111109", "-112111110-1"];
var fsMinSix = ["2-11222", "-1-14645", "-1-17879", "-1-111111011", "0","0","0"];
var fsMinSeven = ["2-1222-1", "-1-14655", "-1-17979", "-191191012", "0","0","0"];
var fsMinNine = ["20212-1", "-19799-1", "0", "0", "0", "0", "0"];
var fsMinEleven = ["222222", "-1999109", "0", "0","0", "0", "0"];
var fsMinThirteen = ["242242", "-1999109", "0","0","0","0","0"];

//define all chord arrays for root G
var gMaj = ["320003", "355433","7-1578-1", "-1-15787", "-1109787", "10-1978-1", "-11012121210"];
var gFive = ["-1-10033", "355-1-1-1", "-1-1578-1", "-1101212-1-1", "0", "0", "0"];
var gSix = ["320000", "-1-15430", "35-1453", "-11012121212", "0", "0", "0"];
var gSeven = ["320001", "3-13430", "353433", "-1-15767", "7-1576-1", "-11012101210", "0"];
var gMajSeven = ["320002", "-1-15432", "-1-15777", "-11012111210", "0", "0", "0"];
var gNine = ["3-10201", "3-13203", "353435", "-1109101010", "0", "0", "0"];
var gMajNine = ["3-10202", "-1107777", "0", "0", "0", "0", "0"];
var gEleven = ["320211", "333435", "-1-15567", "-11091088", "0","0","0"];
var gThirteen = ["-1-13000", "353453", "-1-13453", "-1109101012", "0", "0", "0"];
var gMajThirteen = ["322232", "-110-1111212", "0", "0", "0", "0", "0"];
var gMin = ["310033", "355333", "-1-15336", "-1-15336", "-1-15786", "-1-18786", "-110878-1", "-11012121110"];
var gMinSix = ["-1-12333", "355353", "-17878-1", "-11012911-1", "0", "0", "0"];
var gMinSeven = ["-11303-1", "3-1333-1", "353363", "-110-1101110", "0", "0", "0"];
var gMinNine = ["3-13335", "-11081010-1", "0", "0", "0", "0", "0"];
var gMinEleven = ["333333", "-11010101110", "0", "0", "0", "0", "0"];
var gMinThirteen = ["353335", "-110-1101112", "0", "0", "0", "0", "0"];

//define all chord arrays for root G#
var gsMaj = ["43111-1", "-1-11114", "466544", "8-1678-1", "-1-16898", "-1111089-1", "-1-1108911"];
var gsFive = ["-1-11144", "46-1564", "-1-16868", "0", "0", "0", "0"];
var gsSix = ["-1-11111", "46-1564", "-1-16868", "0", "0", "0", "0"];
var gsSeven = ["-1-11112", "464544", "46-157-1", "4-1454-1", "-1-16878", "0", "0"];
var gsMajSeven = ["-1-11113", "-1-16543", "465544", "-11110888", "0", "0", "0"];
var gsNine = ["4-1431-1", "464546", "-1-16576", "-11110111111", "0", "0", "0"];
var gsMajNine = ["43534-1", "-136343", "0", "0", "0", "0", "0"];
var gsEleven = ["-131122", "444546", "-1-16678", "-111101199", "0", "0", "0"];
var gsThirteen = ["4-14311", "4-1456-1", "464566", "0", "0", "0", "0"];
var gsMajThirteen = ["433343", "0", "0", "0", "0", "0","0"];
var gsMin = ["-121144", "466444", "7-16444", "-1-16897", "-1-19897", "-111989-1", "0"];
var gsMinSix = ["4-1344-1","466464", "-1-16867", "-111-1101211", "0", "0", "0"];
var gsMinSeven = ["4-1444-1", "464474", "-111987-1", "0", "0", "0", "0"];
var gsMinNine = ["-124344", "4-14446", "0", "0", "0", "0", "0"];
var gsMinEleven = ["444444", "-11111111211", "0", "0", "0", "0", "0"];
var gsMinThirteen = ["4-1446-1", "0", "0", "0", "0", "0", "0"];

function start()
{
   drawFretboard(stringDistance, fretDistance);
   mouseClickMethod(drawMarkers);
}

//this function draws the graphical elements of the fretboard on the screen
function drawFretboard(stringDistance, fretDistance)
{
   //draw each string
   for(var i = 0; i < 6; i++)
   {
       var string = new Line(stringDistance * (i+1), 120, stringDistance * (i+1), HEIGHT);
       add(string);
   }
   //draw the nut
   var nut = new Line(stringDistance, 120, stringDistance * 6, 120);
   nut.setLineWidth(5);
   add(nut);
   //draw each fret
   for(var i = 0; i < 13; i++)
   {
     var fret = new Line(stringDistance, 80 + fretDistance * (i+1), stringDistance * 6, 80 +fretDistance * (i+1));
     add(fret);
   }
    //label each string
    var stringNames = new Text("E A D G B e", "15pt Arial");
    stringNames.setPosition(25,70);
    add(stringNames);
}

//This function will determine the fret position each string is selected at
function chordMarker(chordMarkers, y, x)
{
  //loop through each string
  for(var i = 0; i < 6; i++)
  {
    //loop through each fret
    for(var j = 0; j < 13; j++)
    {
        //check if the string was clicked on or not, if not it exits inner loop and moves to next string
          if(x > stringDistance * (i+1) && x < stringDistance * (i+2))
          {
              //checking if click was on fret, on the open area, or on the mute area
              if((80 + (fretDistance * (j+1))) < y && y < (80 + (fretDistance *(j+2))))
              {
                y = (80 + fretDistance * (j + 2)) + ((80 + fretDistance * (j + 2)) - (80 + fretDistance * (j+3)))/2;
                chordMarkers[i] = j+1;
                break;
              }
              else if(70 < y && y < (80 + fretDistance))
              {
                chordMarkers[i] = 0;
              }
              else
              {
                chordMarkers[i] = -1;
              }
          }
          else
          {
              break;
          }
      }
  }
 println(chordMarkers);
 return(chordMarkers);
}
//this function draws the markers on the screen based on the values in the chordmarkers array
function makeMarkers(chordMarkers)
{
   for(var i = 0; i < 6; i++)
   {
       if(chordMarkers[i] > 0)
       {
           var circle = new Circle(10);
           circle.setColor(Color.black);
           circle.setPosition(stringDistance * (i + 1), 20 + fretDistance * (chordMarkers[i] + 2));
           add(circle);
       }
       else if(chordMarkers[i] == 0)
       {
           var circle = new Circle(10);
           circle.setColor(Color.black);
           circle.setPosition(stringDistance * (i+1), 95);
           add(circle);
           var hole = new Circle(8);
           hole.setColor(Color.white);
           hole.setPosition(stringDistance * (i+1), 95);
           add(hole);
       }
       else
       {
           var letterX = new Text("X", "15pt Arial");
           letterX.setColor(Color.black);
           letterX.setPosition(stringDistance * (i+1) - 10, 105);
           add(letterX);
       }
   }
}
//this function changes the chordMarkers array into a string so that it can be compared to the strings
//in the chord arrays defined above
function arrayToString(chordMarkers)
{
   var string = "";
   for(var i = 0; i < 6; i++)
   {
       string += chordMarkers[i];
   }
   return(string);
}
//this function loops through all the chord arrays and compares them to the string created from the
//chordMarkers array by the arrayToString function
function chordComparer(chordMarkers)
{
    var bool=true;
    for(var i = 0; i < 6; i++)
    {
        if(arrayToString(chordMarkers) == aMaj[i])
        {
          println("Amaj");
        }
        else if(arrayToString(chordMarkers) == aFive[i])
        {
          println("A5");
        }
        else if(arrayToString(chordMarkers) == aSix[i])
        {
          println("A6");
        }
        else if(arrayToString(chordMarkers) == aSeven[i])
        {
          println("A7");
        }
        else if(arrayToString(chordMarkers) == aMajSeven[i])
        {
          println("Amaj7");
        }
        else if(arrayToString(chordMarkers) == aNine[i])
        {
          println("A9");
        }
        else if(arrayToString(chordMarkers) == aMajNine[i])
        {
          println("Amaj9");
        }
        else if(arrayToString(chordMarkers) == aEleven[i])
        {
          println("A11");
        }
        else if(arrayToString(chordMarkers) == aThirteen[i])
        {
          println("A13");
        }
        else if(arrayToString(chordMarkers) == aMajThirteen[i])
        {
          println("Amaj13");
        }
        else if(arrayToString(chordMarkers) == aMin[i])
        {
          println("Amin");
        }
        else if(arrayToString(chordMarkers) == aMinSix[i])
        {
          println("Amin6");
        }
        else if(arrayToString(chordMarkers) == aMinSeven[i])
        {
          println("Amin7");
        }
        else if(arrayToString(chordMarkers) == aMinNine[i])
        {
          println("Amin9");
        }
        else if(arrayToString(chordMarkers) == aMinEleven[i])
        {
          println("Amin11");
        }
        else if(arrayToString(chordMarkers) == aMinThirteen[i])
        {
          println("Amin13");
        }

        else if(arrayToString(chordMarkers) == bbMaj[i])
        {
          println("Bbmaj");
        }
        else if(arrayToString(chordMarkers) == bbFive[i])
        {
          println("Bb5");
        }
        else if(arrayToString(chordMarkers) == bbSix[i])
        {
          println("Bb6");
        }
        else if(arrayToString(chordMarkers) == bbSeven[i])
        {
          println("Bb7");
        }
        else if(arrayToString(chordMarkers) == bbMajSeven[i]
        {
          println("Bbmaj7")
        }
        else if(arrayToString(chordMarkers) == bbNine[i])
        {
          println("Bb9");
        }
        else if(arrayToString(chordMarkers) == bbMajNine[i])
        {
          println("Bbmaj9");
        }
        else if(arrayToString(chordMarkers) == bbEleven[i])
        {
          println("Bb11");
        }
        else if(arrayToString(chordMarkers) == bbThirteen[i])
        {
          println("Bb13");
        }
        else if(arrayToString(chordMarkers) == bbMajThirteen[i])
        {
          println("Bbmaj13");
        }
        else if(arrayToString(chordMarkers) == bbMin[i])
        {
          println("Bbmin");
        }
        else if(arrayToString(chordMarkers) == bbMinSix[i])
        {
          println("Bbmin6");
        }
        else if(arrayToString(chordMarkers) == bbMinSeven[i])
        {
          println("Bbmin7");
        }
        else if(arrayToString(chordMarkers) == bbMinNine[i])
        {
          println("Bbmin9");
        }
        else if(arrayToString(chordMarkers) == bbMinEleven[i])
        {
          println("Bbmin11");
        }
        else if(arrayToString(chordMarkers) == bbMinThirteen[i])
        {
          println("Bbmin13");
        }

        else if(arrayToString(chordMarkers) == bMaj[i])
        {
          println("Bmaj");
        }
        else if(arrayToString(chordMarkers) == bFive[i])
        {
          println("B5");
        }
        else if(arrayToString(chordMarkers) == bSix[i])
        {
          println("B6");
        }
        else if(arrayToString(chordMarkers) == bSeven[i])
        {
          println("B7");
        }
        else if(arrayToString(chordMarkers) == bMajSeven[i])
        {
          println("Bmaj7")
        }
        else if(arrayToString(chordMarkers) == bNine[i])
        {
          println("B9");
        }
        else if(arrayToString(chordMarkers) == bMajNine[i])
        {
          println("Bmaj9");
        }
        else if(arrayToString(chordMarkers) == bEleven[i])
        {
          println("B11");
        }
        else if(arrayToString(chordMarkers) == bThirteen[i])
        {
          println("B13");
        }
        else if(arrayToString(chordMarkers) == bMajThirteen[i])
        {
          println("Bmaj13");
        }
        else if(arrayToString(chordMarkers) == bMin[i])
        {
          println("Bmin");
        }
        else if(arrayToString(chordMarkers) == bMinSix[i])
        {
          println("Bmin6");
        }
        else if(arrayToString(chordMarkers) == bMinSeven[i])
        {
          println("Bmin7");
        }
        else if(arrayToString(chordMarkers) == bMinNine[i])
        {
          println("Bmin9");
        }
        else if(arrayToString(chordMarkers) == bMinEleven[i])
        {
          println("Bmin11");
        }
        else if(arrayToString(chordMarkers) == bMinThirteen[i])
        {
          println("Bmin13");
        }

        else if(arrayToString(chordMarkers) == cMaj[i])
        {
          println("Cmaj");
        }
        else if(arrayToString(chordMarkers) == cFive[i])
        {
          println("C5");
        }
        else if(arrayToString(chordMarkers) == cSix[i])
        {
          println("C6");
        }
        else if(arrayToString(chordMarkers) == cSeven[i])
        {
          println("C7");
        }
        else if(arrayToString(chordMarkers) == cMajSeven[i])
        {
          println("Cmaj7")
        }
        else if(arrayToString(chordMarkers) == cNine[i])
        {
          println("C9");
        }
        else if(arrayToString(chordMarkers) == cMajNine[i])
        {
          println("Cmaj9");
        }
        else if(arrayToString(chordMarkers) == cEleven[i])
        {
          println("C11");
        }
        else if(arrayToString(chordMarkers) == cThirteen[i])
        {
          println("C13");
        }
        else if(arrayToString(chordMarkers) == cMajThirteen[i])
        {
          println("Cmaj13");
        }
        else if(arrayToString(chordMarkers) == cMin[i])
        {
          println("Cmin");
        }
        else if(arrayToString(chordMarkers) == cMinSix[i])
        {
          println("Cmin6");
        }
        else if(arrayToString(chordMarkers) == cMinSeven[i])
        {
          println("Cmin7");
        }
        else if(arrayToString(chordMarkers) == cMinNine[i])
        {
          println("Cmin9");
        }
        else if(arrayToString(chordMarkers) == cMinEleven[i])
        {
          println("Cmin11");
        }
        else if(arrayToString(chordMarkers) == cMinThirteen[i])
        {
          println("Cmin13");
        }

        else if(arrayToString(chordMarkers) == csMaj[i])
        {
          println("C#maj");
        }
        else if(arrayToString(chordMarkers) == csFive[i])
        {
          println("C#5");
        }
        else if(arrayToString(chordMarkers) == csSix[i])
        {
          println("C#6");
        }
        else if(arrayToString(chordMarkers) == csSeven[i])
        {
          println("C#7");
        }
        else if(arrayToString(chordMarkers) == csMajSeven[i])
        {
          println("C#maj7")
        }
        else if(arrayToString(chordMarkers) == csNine[i])
        {
          println("C#9");
        }
        else if(arrayToString(chordMarkers) == csMajNine[i])
        {
          println("C#maj9");
        }
        else if(arrayToString(chordMarkers) == csEleven[i])
        {
          println("C#11");
        }
        else if(arrayToString(chordMarkers) == csThirteen[i])
        {
          println("C#13");
        }
        else if(arrayToString(chordMarkers) == csMajThirteen[i])
        {
          println("C#maj13");
        }
        else if(arrayToString(chordMarkers) == csMin[i])
        {
          println("C#min");
        }
        else if(arrayToString(chordMarkers) == csMinSix[i])
        {
          println("C#min6");
        }
        else if(arrayToString(chordMarkers) == csMinSeven[i])
        {
          println("C#min7");
        }
        else if(arrayToString(chordMarkers) == csMinNine[i])
        {
          println("C#min9");
        }
        else if(arrayToString(chordMarkers) == csMinEleven[i])
        {
          println("C#min11");
        }
        else if(arrayToString(chordMarkers) == csMinThirteen[i])
        {
          println("C#min13");
        }

        else if(arrayToString(chordMarkers) == dMaj[i])
        {
          println("Dmaj");
        }
        else if(arrayToString(chordMarkers) == dFive[i])
        {
          println("D5");
        }
        else if(arrayToString(chordMarkers) == dSix[i])
        {
          println("D6");
        }
        else if(arrayToString(chordMarkers) == dSeven[i])
        {
          println("D7");
        }
        else if(arrayToString(chordMarkers) == dMajSeven[i])
        {
          println("Dmaj7")
        }
        else if(arrayToString(chordMarkers) == dNine[i])
        {
          println("D9");
        }
        else if(arrayToString(chordMarkers) == dMajNine[i])
        {
          println("Dmaj9");
        }
        else if(arrayToString(chordMarkers) == dEleven[i])
        {
          println("D11");
        }
        else if(arrayToString(chordMarkers) == dThirteen[i])
        {
          println("D13");
        }
        else if(arrayToString(chordMarkers) == dMajThirteen[i])
        {
          println("Dmaj13");
        }
        else if(arrayToString(chordMarkers) == dMin[i])
        {
          println("Dmin");
        }
        else if(arrayToString(chordMarkers) == dMinSix[i])
        {
          println("Dmin6");
        }
        else if(arrayToString(chordMarkers) == dMinSeven[i])
        {
          println("Dmin7");
        }
        else if(arrayToString(chordMarkers) == dMinNine[i])
        {
          println("Dmin9");
        }
        else if(arrayToString(chordMarkers) == dMinEleven[i])
        {
          println("Dmin11");
        }
        else if(arrayToString(chordMarkers) == dMinThirteen[i])
        {
          println("Dmin13");
        }

        else if(arrayToString(chordMarkers) == dsMaj[i])
        {
          println("Ebmaj");
        }
        else if(arrayToString(chordMarkers) == dsFive[i])
        {
          println("Eb5");
        }
        else if(arrayToString(chordMarkers) == dsSix[i])
        {
          println("Eb6");
        }
        else if(arrayToString(chordMarkers) == dsSeven[i])
        {
          println("Eb7");
        }
        else if(arrayToString(chordMarkers) == dsMajSeven[i])
        {
          println("Ebmaj7")
        }
        else if(arrayToString(chordMarkers) == dsNine[i])
        {
          println("Eb9");
        }
        else if(arrayToString(chordMarkers) == dsMajNine[i])
        {
          println("Ebmaj9");
        }
        else if(arrayToString(chordMarkers) == dsEleven[i])
        {
          println("Eb11");
        }
        else if(arrayToString(chordMarkers) == dsThirteen[i])
        {
          println("Eb13");
        }
        else if(arrayToString(chordMarkers) == dsMajThirteen[i])
        {
          println("Ebmaj13");
        }
        else if(arrayToString(chordMarkers) == dsMin[i])
        {
          println("Ebmin");
        }
        else if(arrayToString(chordMarkers) == dsMinSix[i])
        {
          println("Ebmin6");
        }
        else if(arrayToString(chordMarkers) == dsMinSeven[i])
        {
          println("Ebmin7");
        }
        else if(arrayToString(chordMarkers) == dsMinNine[i])
        {
          println("Ebmin9");
        }
        else if(arrayToString(chordMarkers) ==dsMinEleven[i])
        {
          println("Ebmin11");
        }
        else if(arrayToString(chordMarkers) == dsMinThirteen[i])
        {
          println("Ebmin13");
        }

        else if(arrayToString(chordMarkers) == fMaj[i])
        {
          println("Fmaj");
        }
        else if(arrayToString(chordMarkers) == fFive[i])
        {
          println("F5");
        }
        else if(arrayToString(chordMarkers) == fSix[i])
        {
          println("F6");
        }
        else if(arrayToString(chordMarkers) == fSeven[i])
        {
          println("F7");
        }
        else if(arrayToString(chordMarkers) == fMajSeven[i])
        {
          println("Fmaj7")
        }
        else if(arrayToString(chordMarkers) == fNine[i])
        {
          println("F9");
        }
        else if(arrayToString(chordMarkers) == fMajNine[i])
        {
          println("Fmaj9");
        }
        else if(arrayToString(chordMarkers) == fEleven[i])
        {
          println("F11");
        }
        else if(arrayToString(chordMarkers) == fThirteen[i])
        {
          println("F13");
        }
        else if(arrayToString(chordMarkers) == fMajThirteen[i])
        {
          println("Fmaj13");
        }
        else if(arrayToString(chordMarkers) == fMin[i])
        {
          println("Fmin");
        }
        else if(arrayToString(chordMarkers) == fMinSix[i])
        {
          println("Fmin6");
        }
        else if(arrayToString(chordMarkers) == fMinSeven[i])
        {
          println("Fmin7");
        }
        else if(arrayToString(chordMarkers) == fMinNine[i])
        {
          println("Fmin9");
        }
        else if(arrayToString(chordMarkers) == fMinEleven[i])
        {
          println("Fmin11");
        }
        else if(arrayToString(chordMarkers) == fMinThirteen[i])
        {
          println("Fmin13");
        }

        else if(arrayToString(chordMarkers) == fsMaj[i])
        {
          println("F#maj");
        }
        else if(arrayToString(chordMarkers) == fsFive[i])
        {
          println("F#5");
        }
        else if(arrayToString(chordMarkers) == fsSix[i])
        {
          println("F#6");
        }
        else if(arrayToString(chordMarkers) == fsSeven[i])
        {
          println("F#7");
        }
        else if(arrayToString(chordMarkers) == fsMajSeven[i])
        {
          println("F#maj7")
        }
        else if(arrayToString(chordMarkers) == fsNine[i])
        {
          println("F#9");
        }
        else if(arrayToString(chordMarkers) == fsMajNine[i])
        {
          println("F#maj9");
        }
        else if(arrayToString(chordMarkers) == fsEleven[i])
        {
          println("F#11");
        }
        else if(arrayToString(chordMarkers) == fsThirteen[i])
        {
          println("F#13");
        }
        else if(arrayToString(chordMarkers) == fsMajThirteen[i])
        {
          println("F#maj13");
        }
        else if(arrayToString(chordMarkers) == fsMin[i])
        {
          println("F#min");
        }
        else if(arrayToString(chordMarkers) == fsMinSix[i])
        {
          println("F#min6");
        }
        else if(arrayToString(chordMarkers) == fsMinSeven[i])
        {
          println("F#min7");
        }
        else if(arrayToString(chordMarkers) == fsMinNine[i])
        {
          println("F#min9");
        }
        else if(arrayToString(chordMarkers) == fsMinEleven[i])
        {
          println("F#min11");
        }
        else if(arrayToString(chordMarkers) == fsMinThirteen[i])
        {
          println("F#min13");
        }

        else if(arrayToString(chordMarkers) == gMaj[i])
        {
          println("Gmaj");
        }
        else if(arrayToString(chordMarkers) == gFive[i])
        {
          println("G5");
        }
        else if(arrayToString(chordMarkers) == gSix[i])
        {
          println("G6");
        }
        else if(arrayToString(chordMarkers) == gSeven[i])
        {
          println("G7");
        }
        else if(arrayToString(chordMarkers) == gMajSeven[i])
        {
          println("Gmaj7")
        }
        else if(arrayToString(chordMarkers) == gNine[i])
        {
          println("G9");
        }
        else if(arrayToString(chordMarkers) == gMajNine[i])
        {
          println("Gmaj9");
        }
        else if(arrayToString(chordMarkers) == gEleven[i])
        {
          println("G11");
        }
        else if(arrayToString(chordMarkers) == gThirteen[i])
        {
          println("G13");
        }
        else if(arrayToString(chordMarkers) == gMajThirteen[i])
        {
          println("Gmaj13");
        }
        else if(arrayToString(chordMarkers) == gMin[i])
        {
          println("Gmin");
        }
        else if(arrayToString(chordMarkers) == gMinSix[i])
        {
          println("Gmin6");
        }
        else if(arrayToString(chordMarkers) == gMinSeven[i])
        {
          println("Gmin7");
        }
        else if(arrayToString(chordMarkers) == gMinNine[i])
        {
          println("Gmin9");
        }
        else if(arrayToString(chordMarkers) == gMinEleven[i])
        {
          println("Gmin11");
        }
        else if(arrayToString(chordMarkers) == gMinThirteen[i])
        {
          println("Gmin13");
        }

        else if(arrayToString(chordMarkers) == gsMaj[i])
        {
          println("G#maj");
        }
        else if(arrayToString(chordMarkers) == gsFive[i])
        {
          println("G#5");
        }
        else if(arrayToString(chordMarkers) == gsSix[i])
        {
          println("G#6");
        }
        else if(arrayToString(chordMarkers) == gsSeven[i])
        {
          println("G#7");
        }
        else if(arrayToString(chordMarkers) == gsMajSeven[i])
        {
          println("G#maj7")
        }
        else if(arrayToString(chordMarkers) == gsNine[i])
        {
          println("G#9");
        }
        else if(arrayToString(chordMarkers) == gsMajNine[i])
        {
          println("G#maj9");
        }
        else if(arrayToString(chordMarkers) == gsEleven[i])
        {
          println("G#11");
        }
        else if(arrayToString(chordMarkers) == gsThirteen[i])
        {
          println("G#13");
        }
        else if(arrayToString(chordMarkers) == gsMajThirteen[i])
        {
          println("G#maj13");
        }
        else if(arrayToString(chordMarkers) == gsMin[i])
        {
          println("G#min");
        }
        else if(arrayToString(chordMarkers) == gsMinSix[i])
        {
          println("G#min6");
        }
        else if(arrayToString(chordMarkers) == gsMinSeven[i])
        {
          println("G#min7");
        }
        else if(arrayToString(chordMarkers) == gsMinNine[i])
        {
          println("G#min9");
        }
        else if(arrayToString(chordMarkers) == gsMinEleven[i])
        {
          println("G#min11");
        }
        else if(arrayToString(chordMarkers) == gsMinThirteen[i])
        {
          println("G#min13");
        }
        else
        {
          continue;
        }
        bool=false;
      }
      if(bool) {
          println("Not an identifiable chord");
          println("");
        }
}
//this function is called on every click and manages the majority of the functionality of the program
function drawMarkers(e)
{
    chordMarker(chordMarkers,e.getY(), e.getX());
    removeAll();
    drawFretboard(stringDistance, fretDistance);
    makeMarkers(chordMarkers);
    chordComparer(chordMarkers);
    println();
}
