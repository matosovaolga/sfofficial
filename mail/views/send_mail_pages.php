<h1>You received a letter!</h1>

<p><b>Name: </b> <?php echo $data['name'] ?></p>
<p><b>Email: </b> <?php echo $data['email']; ?></p>
<?php if (isset($data['company'])): ?>
    <p><b>Phone: </b> <?php echo $data['company']; ?></p>
<?php endif ?>
<?php if (isset($data['phone'])): ?>
    <p><b>Subject: </b> <?php echo $data['phone']; ?></p>
<?php endif ?>
<?php if (isset($data['message'])): ?>
    <p><b>Message: </b> <br> <?php echo $data['message']; ?></p>
<?php endif ?>
