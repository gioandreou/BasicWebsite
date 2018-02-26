<?php

//add_comment.php

$connect = new PDO('mysql:host=webpagesdb.it.auth.gr;dbname=and', 'and', 'and1234');


$error = '';
$comment_name = '';
$comment_content = '';

if(empty($_POST["comment_name"]))
{
 $comment_name = "Anonymous";
}
else
{
  //SQL Injection Prevention with mysqli_real_escape_string
$comment_name = mysqli_real_escape_string($conn,$_POST["comment_name"]);
mysqli_close($conn);
$comment_name = $_POST["comment_name"];
}

if(empty($_POST["comment_content"]))
{
 $error .= '<p class="text-danger"> Warning : Comment is required</p>';
}
else
{ //SQL Injection Prevention with mysqli_real_escape_string
  $comment_content = htmlspecialchars($_POST["comment_content"], ENT_QUOTES, 'UTF-8');
  //$comment_content = mysqli_real_escape_string($conn,$_POST["comment_content"]);
  mysqli_close($conn);
// $comment_content = $_POST["comment_content"];
}

if($error == '')
{
 $query = "
 INSERT INTO tbl_comment
 (parent_comment_id, comment, comment_sender_name)
 VALUES (:parent_comment_id, :comment, :comment_sender_name)
 ";
 $statement = $connect->prepare($query);
 $statement->execute(
  array(
   ':parent_comment_id' => $_POST["comment_id"],
   ':comment'    => $comment_content,
   ':comment_sender_name' => $comment_name
  )
 );
 $error = '<label class="text-success">Comment Added</label>';
}

$data = array(
 'error'  => $error
);

echo json_encode($data);

?>
