
#include <iostream>

using namespace std;

int main()
{
    int even = 0, odd = 0;
    int n;
    cin >> n;
    for (int i=0;i<n;i++)
    {
        int current;
        cin >> current;
        if (current % 2 == 0) even++;
        else odd++;
    }
        if(odd == 0) 
        {
            cout << "Second" <<endl;
        }
        else
        {
            cout << "First" <<endl;
        } 
            
      return 0;
}