#include <iostream>
#include <stack>

using namespace std;

void sort_stack(stack<int> &s)
{
    int v, min;
    stack<int> t;

    while(!s.empty()){
        v = s.top();
        s.pop();

        t.push(v);
    }

    while(!t.empty()){
        min = t.top();
        t.pop();

        while(!s.empty() && s.top() < min){
            v = s.top();
            s.pop();

            t.push(v);

        }

        s.push(min);
    }
}


int main(int argc, char* argv[])
{
    stack<int> s;
    s.push(3);
    s.push(1);
    s.push(2);
    s.push(0);
    s.push(-1);
    s.push(-3);
    s.push(7);
    s.push(7);

    sort_stack(s);

    while(!s.empty()){
        int v;
        v = s.top();
        s.pop();
        cout << v << endl;
    }

    return 0;
}