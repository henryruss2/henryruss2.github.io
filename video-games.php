$name = htmlspecialchars($_POST['name'])
$has-sex = htmlspecialchars($_POST['has-sex']);
$gore  = htmlspecialchars($_POST['gore']);
$focus = htmlspecialchars($_POST['focus'])
if($has-sex == 'checked' || $gore == 'checked' || $focus == 'checked') {
   echo $name + "'s a bad video game!!!"
}
