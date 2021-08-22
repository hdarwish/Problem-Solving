#include <iostream>
#include <string>
using namespace std;
class Progression { 
  public:
    Progression(long f = 0) 
      : first(f), cur(f) { }
  void printProgression(int n); 
  protected:
    virtual long firstValue();
    virtual long nextValue(); 
  protected:
    long first; 
    long cur;
};
void Progression::printProgression(int n) { 
  cout << firstValue();
  for (int i = 2; i <= n; i++)
    cout << ' ' << nextValue(); 
  cout << endl;
}
long Progression::firstValue() { 
  cur = first;
  return cur;
}
long Progression::nextValue() { 
  return ++cur;
}
class ArithProgression : public Progression { // arithmetic progression 
  public:
    ArithProgression(long i = 1); 
  protected:
    virtual long nextValue(); 
  protected:
    long inc;
// constructor // advance
// increment
};
ArithProgression::ArithProgression(long i) 
: Progression(), inc(i) { }
long ArithProgression::nextValue() { 
  cur += inc;
  return cur;
}
int main(int argc, char *argv[]) {
 Progression* prog;
 cout <<"Arithmetic progression with default increment:\n"; 
 prog = new ArithProgression();
 prog->printProgression(10);
 cout <<"Arithmetic progression with increment 5:\n";
 prog = new ArithProgression(5); 
 prog->printProgression(10);
 return EXIT_SUCCESS; // successful execution
}