object object1 = 7;
object object2 = 28;
object object3 = -1;
object object4 = true;
object object5 = "chair";

List<object> newList = new List<object>();

newList.Add(object1);
newList.Add(object2);
newList.Add(object3);
newList.Add(object4);
newList.Add(object5);

foreach (object obj in newList)
{
    Console.WriteLine(obj);
}

int sum = 0;
for (int i = 0; i < newList.Count; i++)
{
    if (newList[i] is int) {
        sum += (int)newList[i];
    }
}

Console.WriteLine(sum);