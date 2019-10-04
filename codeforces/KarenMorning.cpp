#include<bits/stdc++.h> 

using namespace std;

int main()
{
    string s,hstr,mstr;
	cin>>s;
	int h,m,sleepmin=0;
    bool pal = false;
	hstr=s[0];
	hstr+=s[1];
	mstr=s[3];
	mstr+=s[4];
	h=stoi(hstr);
	m=stoi(mstr);
    while (pal== false)
    {
        if (hstr[0]== mstr[1] && hstr[1]== mstr[0])
        {
            pal = true;
        }
        else {
            if (m == 59) {
                m = 0;mstr="00";
                if (h == 23) {
                    h = 0;hstr="00";
                }
                else {
                    h++;
                    if(h<10){
                        hstr="0"+h;
                    }
                    else{
                        hstr=""+h;
                    }
                }
            }
            else {
                m++;
                if(m<10){
                        mstr="0"+m;
                    }
                    else{
                        mstr=""+m;
                    }
            }
            sleepmin++;
        }
    }
        cout<<sleepmin<<endl;
    return 0;
}