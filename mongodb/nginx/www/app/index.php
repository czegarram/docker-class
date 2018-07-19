<?php
  
  
 $connection = pg_connect ("host=postgresql-app dbname=app user=root password=root");
    if($connection) {
	           echo 'connected to postgresql :)';
		       } else {
			               echo 'there has been an error connecting';
				           } 


phpinfo();

?>
