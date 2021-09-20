export class Authservice{
    isauth=false;
    signIn(){
    this.isauth=true;
    }
    signOut(){
        this.isauth=true;
        }
}