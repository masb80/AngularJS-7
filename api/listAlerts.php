<?php
/**
 * Returns the list of cars.
 */
require 'connectControler.php';
    
$alerts = [];
$sql = "SELECT name, alert, type, date FROM alerts";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $alerts[$cr]['name'] = $row['name'];
    $alerts[$cr]['alert'] = $row['alert'];
    $alerts[$cr]['type'] = $row['type'];
    $alerts[$cr]['date'] = $row['date'];
    $cr++;
  }
    
  echo json_encode(['data'=>$alerts]);
}
else
{
  http_response_code(404);
}
