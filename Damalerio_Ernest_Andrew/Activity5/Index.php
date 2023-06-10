<?php

$item1 = 100;
$item2 = 200;
$item3 = 300;



function StockRemaining1($qty) {
  global $item1;
  $item1 =  $item1 - $qty;
  return "Item 1 - ($qty) |Remaining Stocks = $item1";
 
  

}
function StockRemaining2($qty) {
  global $item2;
  $item2 =  $item2 - $qty;
  return "Item 2 - ($qty) |Remaining Stocks = $item2";
  

}
function StockRemaining3($qty) {
  global $item3;
  $item3 =  $item3 - $qty;
  return "Item 3 - ($qty) |Remaining Stocks = $item3";
  

}

echo StockRemaining1(3);
echo "\n";
echo StockRemaining1(5);
echo "\n";
echo StockRemaining2(5);
echo "\n";
echo StockRemaining1(50);
echo "\n";
echo StockRemaining3(5);
echo "\n";

?>