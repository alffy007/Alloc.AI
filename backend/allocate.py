from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI
from langchain.chains import LLMChain

def prompt():
    llm = OpenAI(openai_api_key="", temperature=0.1)

    prompt = PromptTemplate(
        input_variables=["work"],
        template="what tech stacks are present in the work statement {work}.return only name of tech stacks like this 'django,python,react'",
    )
    chain = LLMChain(llm=llm, prompt=prompt)
    return chain

def question(inputs):
    chain = prompt()
    response = chain.run(inputs)
    
    
    tech_stacks = [stack.strip() for stack in response.split(',') if stack.strip()]
    
    return tech_stacks



tech_needed= question("fix a bug in react app")
print(tech_needed)

employee_data = {}
emp1=["1","react,javascript","true","70","2"]
emp2=["2","django,sql","true","50","3"]
emp3=["3","html,css,js,python,flask,sql","false","70","2"]
emp4=["4","django,sql,javascript","true","50","3"]

employee_data["emp1"] = emp1
employee_data["emp2"] = emp2
employee_data["emp3"] = emp3
employee_data["emp4"] = emp4

tech_employee_map = {tech: [] for tech in tech_needed}
for tech in tech_needed:
    for emp in [emp1, emp2, emp3, emp4]:
        if tech.lower() in emp[1].lower():
            tech_employee_map[tech].append(emp[0])
            # print(f"Technology '{tech}' found in employee {emp[0]}")


        
print(tech_employee_map)

for i in range(0,len(tech_needed)):
    print(f"----------------------task no {i}----------------------")
    print(tech_employee_map[tech_needed[i]])
    print(f"no.of people knowing the tech for task {i} is {len(tech_employee_map[tech_needed[i]])}")
    if len(tech_employee_map[tech_needed[i]])!=0:
        for j in range(0,len(tech_employee_map[tech_needed[i]])):
            people=tech_employee_map[tech_needed[i]][j]
            varname="emp"+people
            print(f"{varname} is  availability for {i}th task is {employee_data[varname][2]}")
            # if employee_data[varname][2]=="true":#employee is free
            

            
            
  





