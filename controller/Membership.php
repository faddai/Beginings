class Membership {

    private $user;

    public function __construct($user_info){
        $this->user = new User($user_info);
    }

}
