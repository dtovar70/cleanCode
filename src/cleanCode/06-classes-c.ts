(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar la composición frente la herencia

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {

        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps{
        email: string;
        role: string;
    }

   class User{

    public email: string;
    public lastAccess: Date;
    public role: string;
    constructor({ 
        email, 
        role, 
    }: UserProps){
        
        this.lastAccess = new Date();
        this.email = email;
        this.role = role;
    }


    checkCredentials(){
        return true;
       }

   }

interface SettingsProps{
    workingDirectory: string;
    lastOpenFolder: string;
}   

class Settings{

    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
        workingDirectory,
        lastOpenFolder,
    }: SettingsProps){
        this.workingDirectory = workingDirectory;
        this.lastOpenFolder = lastOpenFolder;
    }
   }

   interface UserSettingsProps{
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;   

    } 

   class UserSettings{

    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
        name, gender, birthdate, email, role,
        workingDirectory, lastOpenFolder
    }: UserSettingsProps){
        this.person = new Person({name, gender, birthdate});
        this.user   = new User({email, role})
        this.settings = new Settings({lastOpenFolder, workingDirectory})
    }
   }

   const userSettings = new UserSettings({
       birthdate: new Date(),
       email: '5Hq9Q@example.com',
       gender:'M',
       lastOpenFolder: '/home',
       name: 'Fernando',
       role: 'admin',
       workingDirectory: 'usr/home',
});

   console.log({ userSettings });


})();