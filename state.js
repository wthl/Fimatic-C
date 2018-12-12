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

    // --- Создает таблицу с данными блоков.
    function addTable(cnt,rx_str){
    var i;
    var num_ch=num_ch_to_module(Number(rx_str.split('#',2)[1]));
    var sn='0000'+rx_str.split('#',3)[2];
    var ver=rx_str.split('#',4)[3]+'.'+rx_str.split('#',5)[4]+rx_str.split('#',6)[5]+'.'+rx_str.split('#',7)[6]+rx_str.split('#',8)[7];
    var tname='<p><font color="blue" onclick="ModalWindows_change('+cnt+','+rx_str.split('#',3)[2]+','+rx_str.split('#',1)[0]+')">'+(cnt+1)+' / '+NameModule(Number(rx_str.split('#',2)[1]))+'<p>Зав.№: '+sn.slice(-5)+'</p><p>Версия: '+ver+'</p><p>Адрес: '+rx_str.split('#',1)[0]+'</p></font></p>';
    var ttype='';
    var tval='';
      for (i=0;i<num_ch;i++){
        ttype+='<p><input type="text" id="T'+cnt+'_'+i+'" readonly="" size="30" onclick="ModalWindows_type('+cnt+','+i+')"></p>';
        tval+='<p><input type="text" id="V'+cnt+'_'+i+'" readonly="" size="10"></p>';
      }
      // --- Вносит данные в ячейки таблицы.
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
        return 'МВАТН2-ЕР'
      case 0x02:
        return 'МСАТ4-ЕР'
      case 0x03:
        return 'МСАТП4-ЕР'
      case 0x04:
        return 'МСАТС4-ЕР'
      case 0x05:
        return 'МВДО8-ЕР'
      case 0x06:
        return 'МВДР8-ЕР'
      case 0x07:
        return 'МСД4-ЕР'
      case 0x08:
        return 'МСД8-ЕР'
      case 0x09:
        return 'МСАН4-ЕР'
      case 0x0A:
        return 'МВАТН4-ЕР'
      case 0x11:
        return 'МВАТН2'
      case 0x12:
        return 'МСАТ4'
      case 0x13:
        return 'МСАТП4'
      case 0x14:
        return 'МСАТС4'
      case 0x15:
        return 'МВДО8'
      case 0x16:
        return 'МВДР8'
      case 0x17:
        return 'МСД4'
      case 0x18:
        return 'МСД8'
      case 0x19:
        return 'МСАН4'
      case 0x1A:
        return 'МВАТН4'
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
        return 'Канал отключен';
      case 17:
        return 'Дискретный вход';
      case 33:
        return 'Частотный вход';
      case 34:
        return 'Счетчик импульсов';
      case 35:
        return 'Фазный вход';
      case 36:
        return 'Ускорение';
      case 65:
        return 'Аналоговый вход 0...5В';
      case 66:
        return 'Аналоговый вход 0...10В';
      case 69:
        return 'Аналоговый вход 4...20мА';      
      case 70:
        return 'Аналоговый вход 0...20мА';
      case 81:
        return 'Аналоговый вход термопара K-Type';
      case 82:
        return 'Аналоговый вход термопара L-Type';
      case 83:
        return 'Аналоговый вход термопара E-Type';
      case 84:
        return 'Аналоговый вход термопара T-Type';
      case 85:
        return 'Аналоговый вход термопара J-Type';
      case 95:
        return 'Аналоговый вход термопара универсальная [мВ]';
      case 97:
        return 'Аналоговый вход термосопротивление Pt100 [°C]';
      case 98:
        return 'Аналоговый вход термосопротивление Pt500 [°C]';
      case 99:
        return 'Аналоговый вход термосопротивление Pt1000 [°C]';
      case 100:
        return 'Аналоговый вход термосопротивление 50П  [°C]';
      case 101:
        return 'Аналоговый вход термосопротивление 100П [°C]';
      case 102:
        return 'Аналоговый вход термосопротивление 50M8 [°C]';
      case 103:
        return 'Аналоговый вход термосопротивление 100M8 [°C]';
      case 104:
        return 'Аналоговый вход термосопротивление Ni1000 [°C]';
      case 111:
        return 'Аналоговый вход термосопротивление универсальный [Ом]';
      case 145:
        return 'Дискретный выход';
      case 161:
        return 'Частотный выход';
      case 162:
        return 'Импульсный выход';
      case 193:
        return 'Аналоговый выход 0...+5В';
      case 194:
        return 'Аналоговый выход 0...+10В';
      case 195:
        return 'Аналоговый выход ±5В';
      case 196:
        return 'Аналоговый выход ±10В';
      case 197:
        return 'Аналоговый выход 4...20мА';
      case 198:
        return 'Аналоговый выход 0...20мА';
      case 199:
        return 'Аналоговый выход 0...22мА';
      case 200:
        return 'Аналоговый выход 0...+5,5В';
      case 201:
        return 'Аналоговый выход 0...+11В';
      case 202:
        return 'Аналоговый выход ±5,5В';
      case 203:
        return 'Аналоговый выход ±11В';
      case 238:
        return 'Ошибка канала';
      }
      return 'Unknow';
    }

    function ValChannel(val,type){
      switch(type){
      case 17:
        if(val=='0.000')return 'Выкл';
        else return 'Вкл';
      case 33:
        return val+'Гц';
      case 34:
        return val+'Имп/мин';
      case 35:
        return val+'C°';
      case 36:
        return val+'Гц/с';
      case 65:
        return val+'В';     
      case 66:
        return val+'В'; 
      case 69:
        return val+'мА';
      case 70:
        return val+'мА';
      case 81:
        return val+'°C';
      case 82:
        return val+'°C';
      case 83:
        return val+'°C';
      case 84:
        return val+'°C';
      case 85:
        return val+'°C';      
      case 95:
        return val+'мВ';
      case 97:
        return val+'°C';
      case 98:
        return val+'°C';
      case 99:
        return val+'°C';
      case 100:
        return val+'°C';
      case 101:
        return val+'°C';
      case 102:
        return val+'°C';
      case 103:
        return val+'°C';
      case 104:
        return val+'°C';
      case 111:
        return val+'Ом';        
      case 145:
        if(val=='0.000')return 'Выкл';
        else return 'Вкл';
      case 161:
        return val+'Гц';
      case 162:
        return val+'мксек';
      case 193:
        return val+'В';
      case 194:
        return val+'В';
      case 195:
        return val+'В';
      case 196:
        return val+'В';
      case 197:
        return val+'мА';
      case 198:
        return val+'мА';
      case 199:
        return val+'мА';
      case 200:
        return val+'В';
      case 201:
        return val+'В';
      case 202:
        return val+'В';
      case 203:
        return val+'В';
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

    // Ввод данных в модальном окне
    function ModalWindows_change(num,sn,addr){
      modal.element.innerHTML ='<h4 align="center">Введите новый адрес для модуля №'+(num+1)+' из системы Fimatic-C</h4>\
      <table style="width:400px; "align="center" border="1" cellpadding="6" cellspacing="0" cols="2">\
      <tr>\
        <td><b>Серийный номер модуля</b></td>\
        <td><input type="text" id="sn" value="'+sn+'" size=5></td>\
      </tr>\
      <tr>\
        <td><b>Адрес модуля</b></td>\
        <td><input type="text" id="addr" value="'+addr+'" size=5></td>\
      </tr>\
      </table>\
      <p align="center"><button onclick="SaveChange('+num+')">Установить</button><button onclick="SaveDell('+num+')">Удалить</button><button onclick="modal.hide()">Закрыть</button></p>';
      modal.show();
    }

    function ModalWindows_type(num,ch){
      modal.element.innerHTML ='<h4 align="center">Выберите новый тип канала для модуля №'+(num+1)+' из системы Fimatic-C</h4>\
      <p align="center"><select size="1" name="type">\
      <option value="0">Выберите тип канала</option>\
      <option value="17">Дискретный вход</option>\
      <option value="33">Частотный</option>\
      <option value="65">Аналоговый вход 0...5V</option>\
      <option value="66">Аналоговый вход 0...10V</option>\
      <option value="69">Аналоговый вход 4...20mA</option>\
      <option value="70">Аналоговый вход 0...20mA</option>\
      <option value="81">Вход ТП K-Type [°C]</option>\
      <option value="82">Вход ТП L-Type [°C]</option>\
      <option value="83">Вход ТП E-Type [°C]</option>\
      <option value="84">Вход ТП T-Type [°C]</option>\
      <option value="85">Вход ТП J-Type [°C]</option>\
      <option value="95">Вход ТП универс.[мВ]</option>\
      <option value="97">Вход ТC Pt100 a=0.00385[°C]</option>\
      <option value="98">Вход ТC Pt500 a=0.00385[°C]</option>\
      <option value="99">Вход ТC Pt1000 a=0.00385[°C]</option>\
      <option value="100">Вход ТC 50П a=0.00391[°C]</option>\
      <option value="101">Вход ТC 100П a=0.00391[°C]</option>\
      <option value="102">Вход ТC 50M8 a=0.00428[°C]</option>\
      <option value="103">Вход ТC 100M8 a=0.00428[°C]</option>\
      <option value="104">Вход ТC Ni1000 a=0.00617[°C]</option>\
      <option value="111">Вход ТC универс.[Ом]</option>\
      <option value="145">Дискретный выход</option>\
      <option value="193">Аналоговый выход 0...+5В</option>\
      <option value="194">Аналоговый выход 0...+10В</option>\
      <option value="195">Аналоговый выход ±5В</option>\
      <option value="196">Аналоговый выход ±10В</option>\
      <option value="197">Аналоговый выход 4...20mA</option>\
      <option value="198">Аналоговый выход 0...20mA</option>\
      <option value="199">Аналоговый выход 0...22mA</option>\
      <option value="200">Аналоговый выход 0...+5,5В</option>\
      <option value="201">Аналоговый выход 0...+11В</option>\
      <option value="202">Аналоговый выход ±5,5В</option>\
      <option value="203">Аналоговый выход ±11В</option>\
      </select></p>\
      <p align="center"><button onclick="SaveType('+num+','+ch+')">Установить</button><button onclick="modal.hide()">Закрыть</button></p>';
      modal.show();
    }

    function ModalWindows_add(){
      modal.element.innerHTML ='<h4 align="center">Добавление нового модуля в систему Fimatic-C</h4>\
      <table style="width:400px; "align="center" border="1" cellpadding="6" cellspacing="0" cols="2">\
      <tr>\
        <td><b>Тип модуля</b></td>\
        <td><select size="1" id="type">\
          <option value="0">Выберите тип модуля</option>\
          <option value="1">МВАТН2-ЕР</option>\
          <option value="2">МСАТ4-ЕР</option>\
          <option value="3">МСАТП4-ЕР</option>\
          <option value="4">МСАТС4-ЕР</option>\
          <option value="5">МВДО8-ЕР</option>\
          <option value="6">МВДР8-ЕР</option>\
          <option value="7">МСД4-ЕР</option>\
          <option value="8">МСД8-ЕР</option>\
          <option value="9">МСАН4-ЕР</option>\
          <option value="10">МВАТН4-ЕР</option>\
          <option value="17">МВАТН2</option>\
          <option value="18">МСАТ4</option>\
          <option value="19">МСАТП4</option>\
          <option value="20">МСАТС4</option>\
          <option value="21">МВДО8</option>\
          <option value="22">МВДР8</option>\
          <option value="23">МСД4</option>\
          <option value="24">МСД8</option>\
          <option value="25">МСАН4</option>\
          <option value="26">МВАТН4</option>\
        </select></td>\
      </tr>\
      <tr>\
        <td><b>Серийный номер модуля</b></td>\
        <td><input type="text" id="sn" value="0000" size=5></td>\
      </tr>\
      <tr>\
        <td><b>Адрес модуля</b></td>\
        <td><input type="text" id="addr" value="1" size=3></td>\
      </tr>\
      </table>\
      <p align="center"><button onclick="SaveAdd()">Добавить</button><button onclick="modal.hide()">Закрыть</button></p>';
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