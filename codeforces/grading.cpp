#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the gradingStudents function below.
 */
vector<int> gradingStudents(vector<int> grades) {
    vector<int> grading(grades.size());
    for (int grades_itr = 0; grades_itr < grades.size(); grades_itr++) {
        if(grades[grades_itr] < 38 || grades[grades_itr] % 5 == 0)
        {
            grading[grades_itr] = grades[grades_itr];
            continue;
        }
        else if((grades[grades_itr] +1) % 5 == 0 ){
            grading[grades_itr] = grades[grades_itr] + 1;
            continue;
        }
     else if((grades[grades_itr] +2) % 5 == 0 ){
            grading[grades_itr] = grades[grades_itr] + 2;
            continue;
        }
        else{
            grading[grades_itr] = grades[grades_itr];
            continue;
        }
    }
    return grading;

}

int main()
{
    int n;
    cin >> n;

    vector<int> grades(n);

    for (int grades_itr = 0; grades_itr < n; grades_itr++) {
        int grades_item;
        cin >> grades_item;
        grades[grades_itr] = grades_item;
    }

    vector<int> result = gradingStudents(grades);

    for (int result_itr = 0; result_itr < result.size(); result_itr++) {
        cout << result[result_itr];

        if (result_itr != result.size() - 1) {
            cout << "\n";
        }
    }

    cout << "\n";

    
    return 0;
}
