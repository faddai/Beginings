class User{

    public function __construct(){
        $this->user = "Francis";
        $this->age = 46;
    }

    public function get_name(){
        return $this->user;
    }

    public function get_age(){
        return $this->age;
    }

}



