<tbody>
  <tr style="text-align: center;">
    <td>
      <p><font color="blue" onclick="ModalWindows_change(0,65535,13)">1 / МСАТП4</font></p>
      <p><font color="blue" onclick="ModalWindows_change(0,65535,13)">Зав.№: 65535</font></p>
      <p><font color="blue" onclick="ModalWindows_change(0,65535,13)">Версия: 1.1811.2013</font></p>
      <p><font color="blue" onclick="ModalWindows_change(0,65535,13)">Адрес: 13</font></p>
      <p></p>
    </td>
    <td>
      <p><input type="text" id="T0_0" readonly="" size="30" onclick="ModalWindows_type(0,0)"></p>
      <p><input type="text" id="T0_1" readonly="" size="30" onclick="ModalWindows_type(0,1)"></p>
      <p><input type="text" id="T0_2" readonly="" size="30" onclick="ModalWindows_type(0,2)"></p>
      <p><input type="text" id="T0_3" readonly="" size="30" onclick="ModalWindows_type(0,3)"></p>
    </td>
    <td>
      <p><input type="text" id="V0_0" readonly="" size="10"></p>
      <p><input type="text" id="V0_1" readonly="" size="10"></p>
      <p><input type="text" id="V0_2" readonly="" size="10"></p>
      <p><input type="text" id="V0_3" readonly="" size="10"></p>
    </td>
  </tr>
</tbody>
<tbody>
  <tr style="text-align: center;">
    <td>
      <p><font color="blue" onclick="ModalWindows_change(1,22,8)">2 / МСАТС4</font></p>
      <p><font color="blue" onclick="ModalWindows_change(1,22,8)">Зав.№: 00022</font></p>
      <p><font color="blue" onclick="ModalWindows_change(1,22,8)">Версия: 1.1811.1614</font></p>
      <p><font color="blue" onclick="ModalWindows_change(1,22,8)">Адрес: 8</font></p>
      <p></p>
    </td>
    <td>
      <p><input type="text" id="T1_0" readonly="" size="30" onclick="ModalWindows_type(1,0)"></p>
      <p><input type="text" id="T1_1" readonly="" size="30" onclick="ModalWindows_type(1,1)"></p>
      <p><input type="text" id="T1_2" readonly="" size="30" onclick="ModalWindows_type(1,2)"></p>
      <p><input type="text" id="T1_3" readonly="" size="30" onclick="ModalWindows_type(1,3)"></p>
    </td>
    <td>
      <p><input type="text" id="V1_0" readonly="" size="10"></p>
      <p><input type="text" id="V1_1" readonly="" size="10"></p>
      <p><input type="text" id="V1_2" readonly="" size="10"></p>
      <p><input type="text" id="V1_3" readonly="" size="10"></p>
    </td>
  </tr>
</tbody>
</table>
			<p align="center">
        <input type="button" id="add" value="Добавление нового модуля" onclick="ModalWindows_add()">
        <input type="button" id="find" value="Поиск подключенных модулей" onclick="cmd_set(&#39;find_net&#39;)">
        <input type="button" id="conf" value="Автоконфигурация модулей" onclick="cmd_set(&#39;conf_net&#39;)">
      </p>