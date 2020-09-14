<h1>You received a letter!</h1>
<p><b>Name: </b> <?php echo $data['contactFormName'] ?></p>
<p><b>Email: </b> <?php echo $data['contactFormEmail']; ?></p>
<p><b>Phone: </b> <?php echo $data['contactFormPhone']; ?></p>
<p><b>Subject: </b> <?php echo $data['contactFormSubject']; ?></p>
<p><b>Message: </b> <br> <?php echo $data['contactFormMessage']; ?></p>