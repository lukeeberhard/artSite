<!--
Lucas Eberhard
Henry Kang
Web Programming - CMPSCI 3010
4/10/18
-->

<html>
<head>
	<meta charset="utf-8">
	<link href="./style.css" rel="stylesheet" type="text/css">
	<title>Sign In - poorly drawn things</title>
</head>
<body>
<header>
	<h1>poorly drawn things</h1>
	<hr>
	<nav>
		<a href="index.html" id="indnav">Home</a>
		<a href="gallery.html" id="galnav">Gallery</a>
		<a href="game.html" id="gamenav">Memory Game</a>
		<a href="signin.html" id="regnav">Sign In</a>
		<a href="contact.html" id="connav">Contact</a>
	</nav>
	<hr>
</header>
<br><br><br>

	<?php
	
	$db = mysqli_connect("localhost", "root", "", "hw4");
	if (mysqli_connect_errno()) {
		printf("Connection failed: " . mysqli_connect_error());
		exit();
	}
	
	$email = $_POST["email"];
	$pwd = $_POST["pwd"];
	
	$E = "";
	$P = "";
	$F = "";
	$L = "";
	
	$emailSuccess = 1;
	$pwdSuccess = 1;
	
	if ($email == "") {
		header("Location: signup.html");
		exit();
	}
	elseif ($pwd == "") {
		header("Location: signup.html");
		exit();
	}
	else {
		$query = "SELECT * from hw4";
		$result = mysqli_query($db, $query);
		
		$row = mysqli_fetch_assoc($result);
		
		$num_rows = mysqli_num_rows;
		$num_fields = mysqli_num_fields;
		
		for ($row_num = 0; $row_num < $num_rows; $row_num++) {
			$values = array_values($row);
			$tempE = $values["Email"];
			$tempP = $values["Password"];
				if ($email == $tempE) {
					$E = $email;
					$emailSuccess = 0;
					if ($pwd == $tempP) {
						$P = $pwd;
						$F = $values["FirstName"];
						$L = $values["LastName"];
						$pwdSuccess = 0;
					}
				}
			$row = mysqli_fetch_assoc($result);
		}
		
	?>
	
	<?php if ($emailSuccess == 0 && $pwdSuccess == 0) { echo "<h2>Welcome back, $F!<\h2>"; } ?>
	
		<!--f ($emailSuccess == 0 && $pwdSuccess == 0) {
			echo "<h2>Welcome back, $F!</h2>";
			echo "<br><br>";
			echo "<span>Your account summary:</span>";
			echo "<br>";
			echo "<span>Name: $F $L</span>";
			echo "<span>Email: $E</span>";
			echo "<br><br><br>";
		}
		else if ($emailSuccess == 0 && $pwdSuccess == 1) {
			
			
			
			
			
		}-->
	
<footer>
	<br><hr>
	<div>&copy; 2018 Lucas Eberhard</div>
	<br>
</footer>
</body>
</html>