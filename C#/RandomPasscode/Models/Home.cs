#pragma warning disable CS8618

public class Password
{
    public string PasswordCharacters { get; set; }
    public string PasswordString()
    {
        Random rand = new Random();

        string passString = "";
        string alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (int i = 0; i < 14; i++)
        {
            int number = rand.Next(1, 10);
            int alphaOrInt = rand.Next(1, 3);
            int alphaIdx = rand.Next(0, 26);

            if (alphaOrInt == 1)
            {
                passString += alpha[alphaIdx];
            }
            else
            {
                passString += $"{number}";
            }
        }
        PasswordCharacters = passString;

        return passString;
    }
}