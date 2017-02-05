import os
from flask import current_app as app
import json 

class Users():

    def get_users_data_by_id(self, _id ):
        
        return app.db.child("users").order_by_child("id").equal_to(str(_id)).get().val()
        
    def add_users(self, users_data):
        # app.db.child("users").push(users_data)
        app.db.child("users").child(users_data['id']).set(users_data)

        return self.get_users_data_by_id(users_data['id'])
    
    def initialise_test(self, _id):

        questions_path = app.app_path + '/resources/test.json'
        test_data = json.load(open(questions_path, 'r'))
        app.db.child("users").child(str(_id)).update({"tests": test_data})
        
        return self.get_users_data_by_id(_id)

    def link_user_to_institute(_id, institute_id):
        db.child("users").child(_id).update({"institute_id":institute_id})

        return self.get_users_data_by_id(_id)
    
    def unlink_user_to_institute(_id):
        db.child("users").child(_id).update({"institute_id":""})

        return self.get_users_data_by_id(_id)

    def generate_report(self, _id):
        solution_path = app.app_path + '/resources/solution.json'
        master_solution = json.load(open(solution_path, 'r'))
        test_result = self.get_users_data_by_id(_id)
        report = {}
        report['id'] = _id
        master_test = len(master_solution)
        user_test = len(test_result[_id]['tests'])
        update_solution = {}
        if master_test != user_test:
            return "something broke in number of tests"
        else:

            for t in range(1, master_test+1):
                t = str(t)
                report['test'+t]={}
                master_section = len(master_solution['test'+t])
                user_section = len(test_result[_id]['tests']['test'+t])

                if master_section != user_section:
                    return "something broke in number of section in test "  + t
                else:
                    for s in range(1, master_section+1):
                        s = str(s)
                        report['test'+t]['section'+s]={}
                        report['test'+t]['section'+s]['category']={}
                        count = 0
                        master_question = len(master_solution['test'+t]['section'+s]['questions'])
                        user_question = len(test_result[_id]['tests']['test'+t]['section'+s]['questions'])
                        if master_question != user_question:
                            return "something broke in number of section in test "  + t + "and section " + s
                        else:
                            
                            for q in range(1, master_question+1):
                                q = str(q)
                                user_answer = test_result[_id]['tests']['test'+t]['section'+s]['questions']['question'+q]['answer']
                                master_answer = master_solution['test'+t]['section'+s]['questions']['question'+q]['solution']
                                test_result[_id]['tests']['test'+t]['section'+s]['questions']['question'+q]['correct_answer']= master_answer
                                if  user_answer == master_answer:
                                    count +=1
                                    temp = report['test'+t]['section'+s]['category'].get(master_solution['test'+t]['section'+s]['questions']['question'+q]['type'])
                                    if temp is not None:
                                        report['test'+t]['section'+s]['category'][master_solution['test'+t]['section'+s]['questions']['question'+q]['type']] +=1
                                    else:
                                        report['test'+t]['section'+s]['category'][master_solution['test'+t]['section'+s]['questions']['question'+q]['type']] = 1


                        report['test'+t]['section'+s]['correct_answer'] = count
                        report['test'+t]['section'+s]['total_question'] = master_question
                        report['test'+t]['section'+s]['section_title'] = test_result[_id]['tests']['test'+t]['section'+s]['title']
        test_result[_id]['report'] = report
        app.db.child("users").child(_id).set(test_result[_id])
        return report
    def get_solution():
        
        return True

