#include <iostream>
#include <stack>

using namespace std;

stack<int> s1;
stack<int> s2;

bool que_add(int value)
{
    int v;

    s1.push(value);

    return true;
}

bool que_remove(int &value)
{
    int v;

    if(!s2.empty()){
        value = s2.top();
        s2.pop();
        return true;
    }

    while(!s1.empty()){
        v = s1.top();
        s1.pop();
        s2.push(v);
    }

    if(s2.empty())
        return false;

    value = s2.top();
    s2.pop();

    return true;
}

bool que_peek(int &value)
{
    int v;

    while(!s1.empty()){
        v = s1.top();
        s1.pop();
        s2.push(v);
    }

    if(s2.empty())
        return false;

    value = s2.top();
    return true;
}

bool que_empty()
{
    return (s1.empty() && s2.empty()) ? true : false;
}

int main(int argc, char* argv[])
{
    que_add(1);
    que_add(2);
    que_add(3);
    que_add(4);
    int x;
    que_peek(x);
    cout << x << endl;
    int v;

    while(!que_empty()){
        que_remove(v);
        cout << v << endl;
    }
    

    return 0;
}