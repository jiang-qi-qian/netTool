import('config.js');

function checkArgs() {
    try {
        var db = new Sdb(COORDADDR, COORDSVC, SDBUSER, SDBPASSWD);
        db.close();
    } catch (error) {
        println( "Failed to connect sdb, error info: " + error + "(" + getLastErrMsg() + ")" );
        return false;
    }
    return true;
}

function changeIP() {
    var db;
    try {
        db = new Sdb(COORDADDR, COORDSVC, SDBUSER, SDBPASSWD);
    } catch (error) {
        println( "Failed to connect sdb, error info: " + error + "(" + getLastErrMsg() + ")" );
        return false;
    }

    try {
        for (let index = 0; index < IPARRAY.length; index++) {
            var old_ip = IPARRAY[index].OLD_IP;
            var new_ip = IPARRAY[index].NEW_IP;
            println('   Change IP ' + old_ip + ' to ' + new_ip);
            db.HASysGlobalInfo.HARegistry.update({$set:{"IP":old_ip}},{"IP":new_ip});
        }
        db.close();
    } catch (error) {
        println( "  Failed to change ip, error info: " + error + "(" + getLastErrMsg() + ")" );
        return false;
    }

    return true;
}

function main() {
    if ("getNewIPArray" == CUROPR) {
        for (let index = 0; index < IPARRAY.length; index++) {
            println(IPARRAY[index].NEW_IP);
        }
        return;
    }

    println("Begin to check Args");
    if (checkArgs()) {
        println("done");
    } else {
        println("false");
        return false;
    }

    if (CUROPR == "changeIP") {
        println("Begin to change HA IP");
        if (changeIP()) {
            println("done");
        } else {
            println("false");
            return false;
        }
    } else {
        println("Unknown operation");
        return false;
    }
    return;
}

main();