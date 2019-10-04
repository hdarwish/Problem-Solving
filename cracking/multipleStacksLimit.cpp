#include <iostream>
#include <vector>
#include <stack>
using namespace std;

#define STACK_CAP 5

vector<stack<int>*> vec;
int index = 0;
bool initialized = false;

void init_stacks()
{
   stack<int> *s = new stack<int>;
   vec.push_back(s);
}

void stack_push(int v)
{
    if(initialized == false){
        initialized = true;
//        init_stacks();
    }

    stack<int> *s = vec.at(index);
    if(s->size() == 5){
        s = new stack<int>;
        vec.push_back(s);
        index ++ ;
    }

    s->push(v);
}

void stack_pop()
{
    stack<int> *s = vec.at(index);
    if(index > 0){
        if(s->size() == 0){
            delete s;
            index --;
            s = vec.at(index);
        }
        
        s->pop();
    }
    else{
        if(s->size() == 0){
            ;//cout << " no more elements in stack !" << endl;
        }
        else{
            s->pop();
        }
    }
}

bool stack_top(int &v)
{
    //int v = 0;
    stack<int> *s = vec.at(index);
    if(s->size() == 0 && index == 0){
        
        return false;
    }
    
    if(s->size() == 0){
        delete s;
        index --;
        s = vec.at(index);
    }

    v = s->top();

    return true;
}

void deinit_stacks()
{
    stack<int> *s;

    for(int i = 0; i <= index; i++){
        s = vec.at(i);
        delete s;
    }
}

int main(int argc, char* argv[])
{
    init_stacks();

    for(int i = 0; i < 30; i++){
        stack_push(i);
        cout << "Push: Stack index " << index << " -- " << i << endl; 
    }

    for(int i = 0; i < 40; i++){
        int v;
        int b = stack_top(v);
        stack_pop();

        if(b){
            cout << "Stack index " << index << " -- " << v << endl;
        }
        else{
            cout << "No more elements in stack !" << endl;
        }
    }

    for(int i = 0; i < 10; i++){
        stack_push(i);
        cout << "Push: Stack index " << index << " -- " << i << endl; 
    }

    for(int i = 0; i < 15; i++){
        int v;
        int b = stack_top(v);
        stack_pop();

        if(b){
            cout << "Stack index " << index << " -- " << v << endl;
        }
        else{
            cout << "No more elements in stack !" << endl;
        }
    }


    deinit_stacks();

 return 0;
}
