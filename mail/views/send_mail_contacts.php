<h1>You received a letter!</h1>

<p><b>Name: </b> <?php echo $data['contactFormName'] ?></p>
<p><b>Email: </b> <?php echo $data['contactFormEmail']; ?></p>
<?php if (isset($data['contactFormCompany'])): ?>
    <p><b>Phone: </b> <?php echo $data['contactFormCompany']; ?></p>
<?php endif ?>
<?php if (isset($data['contactFormPhone'])): ?>
    <p><b>Subject: </b> <?php echo $data['contactFormPhone']; ?></p>
<?php endif ?>
<p><b>Message: </b> <br> <?php echo $data['contactFormMessage']; ?></p>