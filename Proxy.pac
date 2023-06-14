{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red18\green31\blue60;\red241\green242\blue245;}
{\*\expandedcolortbl;;\cssrgb\c9020\c16863\c30196;\cssrgb\c95686\c96078\c96863;}
\margl1440\margr1440\vieww21340\viewh13920\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function FindProxyForURL(url, host) \{\
    PROXY = "PROXY 
\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
fwdproxy.pyn.ru
\fs24 \cf0 \cb1 \kerning1\expnd0\expndtw0 :4443\'94 // \uc0\u1079 \u1072 \u1084 \u1077 \u1085 \u1080 \u1090 \u1077  \u1085 \u1072  \u1072 \u1076 \u1088 \u1077 \u1089  \u1074 \u1072 \u1096 \u1077 \u1075 \u1086  \u1087 \u1088 \u1086 \u1082 \u1089 \u1080 -\u1089 \u1077 \u1088 \u1074 \u1077 \u1088 \u1072  \u1080  \u1087 \u1086 \u1088 \u1090 \
\
    if (shExpMatch(host, "*.chat.openai.com")) \{\
        return PROXY;\
    \}\
\
    return "DIRECT";\
\}\
}