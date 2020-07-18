$name = htmlspecialchars($_GET['name'])
$has-sex = htmlspecialchars($_GET['has-sex']);
$gore  = htmlspecialchars($_GET['gore']);
$focus = htmlspecialchars($_GET['focus'])
if($has-sex == 'checked' || $gore == 'checked' || $focus == 'checked') {
   echo $name + "'s a bad video game!!!"
}
