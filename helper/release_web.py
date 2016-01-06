import subprocess
import datetime
import time



print "exec: cocos compile -p web -m release"
task1_time=datetime.datetime.now()
p=subprocess.Popen("cd..&cocos compile -p web -m release", shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
out = p.communicate()[0]
print "done:"+(datetime.datetime.now()-task1_time).total_seconds().__str__()+"s"









print "exec: node ______publish.js"
task1_time=datetime.datetime.now()
p=subprocess.Popen("node ______publish.js", shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
out = p.communicate()[0]
print "done,"+(datetime.datetime.now()-task1_time).total_seconds().__str__()+"s"










print "exec: node ______zip.js"
task1_time=datetime.datetime.now()
p=subprocess.Popen("node ______zip.js", shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
out = p.communicate()[0]
print "done,"+(datetime.datetime.now()-task1_time).total_seconds().__str__()+"s"



 

time.sleep(1)