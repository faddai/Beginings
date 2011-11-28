class Mailer{
    public $msg, $subject, $to, $from;

    public function __construct(){
        $this->msg = "The message to send in the email";
    }
}
