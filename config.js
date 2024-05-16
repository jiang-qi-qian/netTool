// SequoiaDB 用户
var SDBUSER = "sdbadmin";
// SequoiaDB 用户对应的密码
var SDBPASSWD = "sdbadmin";
// COORD 节点主机
var COORDADDR = "localhost";
// COORD 节点端口号
var COORDSVC = 11810;
// SequoiaSQL 用户
var SQLUSER = "sdbadmin";
// SequoiaSQL 用户密码
var SQLPASSWD = "sdbadmin";
// 创建的测试 DOMAIN 名
var TESTDOMAIN = "testDomain";
// 创建的测试 CS 名，对应 SQL 的库
var TESTCS = "testCS";
// 创建的测试 CL 名，对应 SQL 的表
var TESTCL = "testCL"
// 实例组注册表业务 IP 转 NAS IP 对应关系
// 拥有把实例组注册表中 OLD_IP 更新为 NEW_IP
var IPARRAY = [
    {"OLD_IP": "100.94.63.176", "NEW_IP": "100.95.17.199"},
    {"OLD_IP": "100.94.63.177", "NEW_IP": "100.95.17.200"},
    {"OLD_IP": "100.94.63.178", "NEW_IP": "100.95.17.201"},
    {"OLD_IP": "100.94.63.179", "NEW_IP": "100.95.17.202"},
    {"OLD_IP": "100.94.63.180", "NEW_IP": "100.95.17.203"},
    {"OLD_IP": "100.94.63.181", "NEW_IP": "100.95.17.204"},
    {"OLD_IP": "100.94.63.182", "NEW_IP": "100.95.17.205"},
    {"OLD_IP": "100.94.63.183", "NEW_IP": "100.95.17.206"},
    {"OLD_IP": "100.94.63.184", "NEW_IP": "100.95.17.207"},
    {"OLD_IP": "100.94.63.185", "NEW_IP": "100.95.17.208"},
    {"OLD_IP": "100.94.63.186", "NEW_IP": "100.95.17.209"},
    {"OLD_IP": "100.94.63.187", "NEW_IP": "100.95.17.210"},
    {"OLD_IP": "100.104.63.174", "NEW_IP": "100.105.17.95"},
    {"OLD_IP": "100.104.63.175", "NEW_IP": "100.105.17.96"},
    {"OLD_IP": "100.104.63.176", "NEW_IP": "100.105.17.91"},
    {"OLD_IP": "100.104.63.177", "NEW_IP": "100.105.17.92"},
    {"OLD_IP": "100.104.63.178", "NEW_IP": "100.105.17.93"},
    {"OLD_IP": "100.104.63.179", "NEW_IP": "100.105.17.94"}
];

IPARRAY = [
    {"OLD_IP": "192.168.31.111", "NEW_IP": "192.168.50.111"},
    {"OLD_IP": "192.168.31.112", "NEW_IP": "192.168.50.112"},
    {"OLD_IP": "192.168.31.113", "NEW_IP": "192.168.50.113"}
];
