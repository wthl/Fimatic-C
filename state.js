var modal = new Modal();
    
    var Num_Module=2;

    function js_start(){
    var i;
      for (i=0;i<Num_Module;i++){load_Base_Module(i);}
    }
    function load_Base_Module(cnt){
    var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET","load.cgi?Base_Module="+cnt,false);
      xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4){
          if(xmlhttp.status==200){
            addTable(cnt,xmlhttp.responseText);
          }
        }
      };
      xmlhttp.send(null);
    }

    // --- ������� ������� � ������� ������.
    function addTable(cnt,rx_str){
    var i;
    var num_ch=num_ch_to_module(Number(rx_str.split('#',2)[1]));
    var sn='0000'+rx_str.split('#',3)[2];
    var ver=rx_str.split('#',4)[3]+'.'+rx_str.split('#',5)[4]+rx_str.split('#',6)[5]+'.'+rx_str.split('#',7)[6]+rx_str.split('#',8)[7];
    var tname='<p><font color="blue" onclick="ModalWindows_change('+cnt+','+rx_str.split('#',3)[2]+','+rx_str.split('#',1)[0]+')">'+(cnt+1)+' / '+NameModule(Number(rx_str.split('#',2)[1]))+'<p>���.�: '+sn.slice(-5)+'</p><p>������: '+ver+'</p><p>�����: '+rx_str.split('#',1)[0]+'</p></font></p>';
    var ttype='';
    var tval='';
      for (i=0;i<num_ch;i++){
        ttype+='<p><input type="text" id="T'+cnt+'_'+i+'" readonly="" size="30" onclick="ModalWindows_type('+cnt+','+i+')"></p>';
        tval+='<p><input type="text" id="V'+cnt+'_'+i+'" readonly="" size="10"></p>';
      }
      // --- ������ ������ � ������ �������.
      document.getElementById('table').innerHTML+='<tr style="text-align: center;"><td>'+tname+'</td><td>'+ttype+'</td><td>'+tval+'</td></tr>';
    }

    function save(request){
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET",request,true);
      xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4){
          if(xmlhttp.status==200){
            alert(xmlhttp.responseText);
          }
        }
      };
      xmlhttp.send(null);
    }

    function cmd_set(str){
      var request="cmd.cgi?"+str;
      var xmlhttp=new XMLHttpRequest();
      xmlhttp.open("GET",request,true);
      xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4){
          if(xmlhttp.status==200){
            alert(xmlhttp.responseText);
          }
        }
      };
      xmlhttp.send(null);
      document.getElementById('add').disabled=true;
      document.getElementById('find').disabled=true;
      document.getElementById('conf').disabled=true;
      if(str=='find_net')setTimeout(function(){top.location.reload();},9000);
      else setTimeout(function(){top.location.reload();},500);
    }

    function NameModule(type){
      switch(type){
      case 0x01:
        return '�����2-��'
      case 0x02:
        return '����4-��'
      case 0x03:
        return '�����4-��'
      case 0x04:
        return '�����4-��'
      case 0x05:
        return '����8-��'
      case 0x06:
        return '����8-��'
      case 0x07:
        return '���4-��'
      case 0x08:
        return '���8-��'
      case 0x09:
        return '����4-��'
      case 0x0A:
        return '�����4-��'
      case 0x11:
        return '�����2'
      case 0x12:
        return '����4'
      case 0x13:
        return '�����4'
      case 0x14:
        return '�����4'
      case 0x15:
        return '����8'
      case 0x16:
        return '����8'
      case 0x17:
        return '���4'
      case 0x18:
        return '���8'
      case 0x19:
        return '����4'
      case 0x1A:
        return '�����4'
      }
      return 'Error'
    }

    function num_ch_to_module(type){
      switch(type&0x0F){
      case 1:
        return 2
      case 2:
        return 4
      case 3:
        return 4
      case 4:
        return 4
      case 5:
        return 8
      case 6:
        return 8
      case 7:
        return 4
      case 8:
        return 8
      case 9:
        return 4
      case 10:
        return 4
      }
      return 0
    }

    function TypeChannel(type){
      switch(type){
      case 0:
        return '����� ��������';
      case 17:
        return '���������� ����';
      case 33:
        return '��������� ����';
      case 34:
        return '������� ���������';
      case 35:
        return '������ ����';
      case 36:
        return '���������';
      case 65:
        return '���������� ���� 0...5�';
      case 66:
        return '���������� ���� 0...10�';
      case 69:
        return '���������� ���� 4...20��';      
      case 70:
        return '���������� ���� 0...20��';
      case 81:
        return '���������� ���� ��������� K-Type';
      case 82:
        return '���������� ���� ��������� L-Type';
      case 83:
        return '���������� ���� ��������� E-Type';
      case 84:
        return '���������� ���� ��������� T-Type';
      case 85:
        return '���������� ���� ��������� J-Type';
      case 95:
        return '���������� ���� ��������� ������������� [��]';
      case 97:
        return '���������� ���� ������������������ Pt100 [�C]';
      case 98:
        return '���������� ���� ������������������ Pt500 [�C]';
      case 99:
        return '���������� ���� ������������������ Pt1000 [�C]';
      case 100:
        return '���������� ���� ������������������ 50�  [�C]';
      case 101:
        return '���������� ���� ������������������ 100� [�C]';
      case 102:
        return '���������� ���� ������������������ 50M8 [�C]';
      case 103:
        return '���������� ���� ������������������ 100M8 [�C]';
      case 104:
        return '���������� ���� ������������������ Ni1000 [�C]';
      case 111:
        return '���������� ���� ������������������ ������������� [��]';
      case 145:
        return '���������� �����';
      case 161:
        return '��������� �����';
      case 162:
        return '���������� �����';
      case 193:
        return '���������� ����� 0...+5�';
      case 194:
        return '���������� ����� 0...+10�';
      case 195:
        return '���������� ����� �5�';
      case 196:
        return '���������� ����� �10�';
      case 197:
        return '���������� ����� 4...20��';
      case 198:
        return '���������� ����� 0...20��';
      case 199:
        return '���������� ����� 0...22��';
      case 200:
        return '���������� ����� 0...+5,5�';
      case 201:
        return '���������� ����� 0...+11�';
      case 202:
        return '���������� ����� �5,5�';
      case 203:
        return '���������� ����� �11�';
      case 238:
        return '������ ������';
      }
      return 'Unknow';
    }

    function ValChannel(val,type){
      switch(type){
      case 17:
        if(val=='0.000')return '����';
        else return '���';
      case 33:
        return val+'��';
      case 34:
        return val+'���/���';
      case 35:
        return val+'C�';
      case 36:
        return val+'��/�';
      case 65:
        return val+'�';     
      case 66:
        return val+'�'; 
      case 69:
        return val+'��';
      case 70:
        return val+'��';
      case 81:
        return val+'�C';
      case 82:
        return val+'�C';
      case 83:
        return val+'�C';
      case 84:
        return val+'�C';
      case 85:
        return val+'�C';      
      case 95:
        return val+'��';
      case 97:
        return val+'�C';
      case 98:
        return val+'�C';
      case 99:
        return val+'�C';
      case 100:
        return val+'�C';
      case 101:
        return val+'�C';
      case 102:
        return val+'�C';
      case 103:
        return val+'�C';
      case 104:
        return val+'�C';
      case 111:
        return val+'��';        
      case 145:
        if(val=='0.000')return '����';
        else return '���';
      case 161:
        return val+'��';
      case 162:
        return val+'�����';
      case 193:
        return val+'�';
      case 194:
        return val+'�';
      case 195:
        return val+'�';
      case 196:
        return val+'�';
      case 197:
        return val+'��';
      case 198:
        return val+'��';
      case 199:
        return val+'��';
      case 200:
        return val+'�';
      case 201:
        return val+'�';
      case 202:
        return val+'�';
      case 203:
        return val+'�';
      case 238:
        return 'Error';
      default:
        return val;
      }
    }

    function load_time(){
    var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET","load.cgi?time",false);
      xmlhttp.onreadystatechange=function(){
      if(xmlhttp.readyState==4){
        if(xmlhttp.status==200){
            document.getElementById('time').value=xmlhttp.responseText;
          }
        }
      };
      xmlhttp.send(null);
    }

    function load_Val(){
    var cnt;
      for (cnt=0;cnt<Num_Module;cnt++){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET","load.cgi?val="+cnt,false);
        xmlhttp.overrideMimeType('text/xml;charset=windows-1251');
        xmlhttp.onreadystatechange=function(){
          if(xmlhttp.readyState==4){
            if(xmlhttp.status==200){
              parser_val(xmlhttp.responseText,cnt);
            }
          }
        };
        xmlhttp.send(null);
      }
    }

    function parser_val(info,cnt){
    var i,ix;
    var type,val;
      for (i=0;i<8;i++){
        ix=i*2;
        type=Number(info.split('#',ix+1)[ix]);
        val=Number(info.split('#',ix+2)[ix+1]);
        document.getElementById('T'+cnt+'_'+i).value=TypeChannel(type);
        document.getElementById('V'+cnt+'_'+i).value=ValChannel(val,type);
      }
    }

    // ���� ������ � ��������� ����
    function ModalWindows_change(num,sn,addr){
      modal.element.innerHTML ='<h4 align="center">������� ����� ����� ��� ������ �'+(num+1)+' �� ������� Fimatic-C</h4>\
      <table style="width:400px;" align="center" border="1" cellpadding="6" cellspacing="0" cols="2">\
      <tr>\
        <td><b>�������� ����� ������</b></td>\
        <td><input type="text" id="sn" value="'+sn+'" size=5></td>\
      </tr>\
      <tr>\
        <td><b>����� ������</b></td>\
        <td><input type="text" id="addr" value="'+addr+'" size=5></td>\
      </tr>\
      </table>\
      <p align="center"><button onclick="SaveChange('+num+')">����������</button><button onclick="SaveDell('+num+')">�������</button><button onclick="modal.hide()">�������</button></p>';
      modal.show();
    }

    function ModalWindows_type(num,ch){
      modal.element.innerHTML ='<h4 align="center">�������� ����� ��� ������ ��� ������ �'+(num+1)+' �� ������� Fimatic-C</h4>\
      <p align="center"><select size="1" name="type">\
      <option value="0">�������� ��� ������</option>\
      <option value="17">���������� ����</option>\
      <option value="33">���������</option>\
      <option value="65">���������� ���� 0...5V</option>\
      <option value="66">���������� ���� 0...10V</option>\
      <option value="69">���������� ���� 4...20mA</option>\
      <option value="70">���������� ���� 0...20mA</option>\
      <option value="81">���� �� K-Type [�C]</option>\
      <option value="82">���� �� L-Type [�C]</option>\
      <option value="83">���� �� E-Type [�C]</option>\
      <option value="84">���� �� T-Type [�C]</option>\
      <option value="85">���� �� J-Type [�C]</option>\
      <option value="95">���� �� �������.[��]</option>\
      <option value="97">���� �C Pt100 a=0.00385[�C]</option>\
      <option value="98">���� �C Pt500 a=0.00385[�C]</option>\
      <option value="99">���� �C Pt1000 a=0.00385[�C]</option>\
      <option value="100">���� �C 50� a=0.00391[�C]</option>\
      <option value="101">���� �C 100� a=0.00391[�C]</option>\
      <option value="102">���� �C 50M8 a=0.00428[�C]</option>\
      <option value="103">���� �C 100M8 a=0.00428[�C]</option>\
      <option value="104">���� �C Ni1000 a=0.00617[�C]</option>\
      <option value="111">���� �C �������.[��]</option>\
      <option value="145">���������� �����</option>\
      <option value="193">���������� ����� 0...+5�</option>\
      <option value="194">���������� ����� 0...+10�</option>\
      <option value="195">���������� ����� �5�</option>\
      <option value="196">���������� ����� �10�</option>\
      <option value="197">���������� ����� 4...20mA</option>\
      <option value="198">���������� ����� 0...20mA</option>\
      <option value="199">���������� ����� 0...22mA</option>\
      <option value="200">���������� ����� 0...+5,5�</option>\
      <option value="201">���������� ����� 0...+11�</option>\
      <option value="202">���������� ����� �5,5�</option>\
      <option value="203">���������� ����� �11�</option>\
      </select></p>\
      <p align="center"><button onclick="SaveType('+num+','+ch+')">����������</button><button onclick="modal.hide()">�������</button></p>';
      modal.show();
    }

    function ModalWindows_add(){
      modal.element.innerHTML ='<h4 align="center">���������� ������ ������ � ������� Fimatic-C</h4>\
      <table style="width:400px;" align="center" border="1" cellpadding="6" cellspacing="0" cols="2">\
      <tr>\
        <td><b>��� ������</b></td>\
        <td><select size="1" id="type">\
          <option value="0">�������� ��� ������</option>\
          <option value="1">�����2-��</option>\
          <option value="2">����4-��</option>\
          <option value="3">�����4-��</option>\
          <option value="4">�����4-��</option>\
          <option value="5">����8-��</option>\
          <option value="6">����8-��</option>\
          <option value="7">���4-��</option>\
          <option value="8">���8-��</option>\
          <option value="9">����4-��</option>\
          <option value="10">�����4-��</option>\
          <option value="17">�����2</option>\
          <option value="18">����4</option>\
          <option value="19">�����4</option>\
          <option value="20">�����4</option>\
          <option value="21">����8</option>\
          <option value="22">����8</option>\
          <option value="23">���4</option>\
          <option value="24">���8</option>\
          <option value="25">����4</option>\
          <option value="26">�����4</option>\
        </select></td>\
      </tr>\
      <tr>\
        <td><b>�������� ����� ������</b></td>\
        <td><input type="text" id="sn" value="0000" size=5></td>\
      </tr>\
      <tr>\
        <td><b>����� ������</b></td>\
        <td><input type="text" id="addr" value="1" size=3></td>\
      </tr>\
      </table>\
      <p align="center"><button onclick="SaveAdd()">��������</button><button onclick="modal.hide()">�������</button></p>';
      modal.show();
    }

    function SaveChange(num){
      save("save.cgi?Change_Module="+num+"&SN_New="+modal.element.getElementsByTagName("input")[0].value+"&Addr_New="+modal.element.getElementsByTagName("input")[1].value);
      modal.hide();
      setTimeout(function(){top.location.reload();},500);
    }

    function SaveType(num,ch){
      save("save.cgi?Change_Module="+num+"&Change_Ch="+ch+"&Type_New="+modal.element.getElementsByTagName("select")[0].value);
      modal.hide();
    }

    function SaveAdd(){
      save("save.cgi?Type_ModuleNew="+modal.element.getElementsByTagName("select")[0].value+"&SN_ModuleNew="+modal.element.getElementsByTagName("input")[0].value+"&Addr_ModuleNew="+modal.element.getElementsByTagName("input")[1].value);
      modal.hide();setTimeout(function(){top.location.reload();},500);
    }

    function SaveDell(cnt){
      save("save.cgi?ModuleDell="+(cnt+1));
      modal.hide();setTimeout(function(){top.location.reload();},500);
    }

    function Modal(){this.element = document.createElement('form');this.element.className = 'modal';}
    Modal.prototype.show = function(){document.body.appendChild(this.element);}
    Modal.prototype.hide = function(){document.body.removeChild(this.element);}
    setInterval(load_Val,500);
    setInterval(load_time,1000);