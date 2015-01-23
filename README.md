# bootstrapExcelExport
Bootstrap plugin to export html tables to excel

<h1>Bootstrap Export Table to Excel Plugin</h1>
<h3>What is this ?</h3>

<p>This is a simple usage plugin to export HTML <code>&lt;table&gt;</code> to excel files. In fact, alow user to save html data to disk as a .xls file. It was developed with
<a href="http://getbootstrap.com/">Twitter Bootstrap</a> in mind, but you can use with regular html tables instead.
<p>It´s based on <a href="https://github.com/battatech/battatech_excelexport">Batta Tech Excel Export</a>, but a bit more simple.</p>
<h3>How to use</h3>
<p>
First of all, you need a HTML <code>&lt;table&gt;</code> decorated or not with bootstrap css <code>table</code>, <code>table-striped</code>, etc.
Then, create a link using <code>&lt;a&gt;</code> tag. Again, you can decorate or not with bootstrap commom button
look and feel css for <code>&lt;a&gt;</code> links using <code>btn btn-default</code>. At last, Use the <code>&lt;a&gt;</code> selector to determine plugins behavior on button click.
</p>
<p>Let´s see some pieces of code...</p>
<h3>Code</h3>
<p>1.Include the plugin in your html. Of course, you <strong>must</strong> have jquery previously loaded - it´s a bootstrap plugin, remember ?</p>
<pre>&lt;script src='fg1998/jquery-bootstrapExportExcel.js'&gt;&lt;/script&gt;</pre>
<p>2.Create a table markup adding follow code like this :</p>
<pre>
  &lt;table class='table table-bordered' id='tblExample'&gt;
      &lt;thead&gt;
          &lt;tr&gt;
              &lt;th&gt;#&lt;/th&gt;
              &lt;th&gt;Column heading&lt;/th&gt;
              &lt;th&gt;Column heading&lt;/th&gt;
              &lt;th&gt;Column heading&lt;/th&gt;
          &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
          &lt;tr&gt;
              &lt;th scope="row"&gt;1&lt;/th&gt;
              &lt;td&gt;Column content&lt;/td&gt;
              &lt;td&gt;Column content&lt;/td&gt;
              &lt;td&gt;Column content&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr&gt;
              &lt;th scope="row"&gt;2&lt;/th&gt;
              &lt;td&gt;Column content&lt;/td&gt;
              &lt;td&gt;Column content&lt;/td&gt;
              &lt;td&gt;Column content&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr&gt;
              &lt;th scope="row"&gt;3&lt;/th&gt;
              &lt;td&gt;Column content&lt;/td&gt;
              &lt;td&gt;Column content&lt;/td&gt;
              &lt;td&gt;Column content&lt;/td&gt;
          &lt;/tr&gt;
          &lt;tr&gt;
              &lt;th scope="row"&gt;4&lt;/th&gt;
              &lt;td&gt;Column content&lt;/td&gt;
              &lt;td&gt;Column content&lt;/td&gt;
              &lt;td&gt;Column content&lt;/td&gt;
          &lt;/tr&gt;
      &lt;/tbody&gt;
  &lt;/table&gt;
</pre>

<p>3.Create a <code>&lt;a&gt;</code> link for click and save</p>
  <pre>
    &lt;a id='btnExport' class='btn btn-primary'&gt;Click me for save&lt;a&gt;                  
</pre>
    
<p>4.Use the <code>&lt;a&gt;</code> selector to connect with plugin. Don´t you forget to inform table id !</p>
<pre>
  $('#btnExport').bootstrapExcelExport({ tableSelector : '#tblExample' });
</pre>

<h3>Options</h3>
<p>Attention - all options are in <a href='https://en.wikipedia.org/wiki/CamelCase'>lower camel case</a>.</p>
<table class="table-bordered table">
        <thead>
            <tr>
                <th>Property</th>
                <th>Required</th>
                <th>Description</th>
            </tr>
        </thead>
        <tr>
            <td>tableSelector</td>
            <td>required</td>
            <td>This is the table identifer. You can use any jQuery compliance selector</td>
        </tr>
        <tr>
            <td>fileName</td>
            <td>optional</td>
            <td>Use this to change default name of downloade file. The default is <em>download.xls</em>. Dont forget to include the extension <mark>.xls</mark>.</td>
        </tr>
        <tr>
            <td>worksheetName</td>
            <td>optional</td>
            <td>Change the excel worksheet name. Default is <em>My Worksheet</em></td>
        </tr>
        <tr>
            <td>encoding</td>
            <td>optional</td>
            <td>Default is <em>utf-8</em>. Change to encoding you need if necessary</td>
        </tr>
    </table>

<h3>Useful links</h3>
<p><a href="http://getbootstrap.com/">Bootstrap</a> - The most popular HTML, CSS and JS Framework for developing responsive, mobile first projects on the web.</p>
<p><a href="http://jquery.com/">jQuery</a> - jQuery is a fast, small, and feature-rich JavaScript library.</p>
<p><a href="https://github.com/battatech/battatech_excelexport">Battatech excelexport</a> - Very useful and rick tool to export HTML tables to excel.</p>

<h3>Compatibility</h3>
<p>List of tested and compatibility browsers<p>
<table>
  <thead>
      <tr>
        <th>Browser</th>
        <th>Version tested</th>
        <th>Compatibility</th>
      </tr>
  </thread>
  <tr>
    <td>Chrome</td>
    <td>40</td>
    <td>Compatible</td>
  </tr>
  <tr>
    <td>Firefox</td>
    <td>34</td>
    <td>Compatible</td>
  </tr>
  <tr>
    <td>Opera</td>
    <td>26</td>
    <td>Compatible</td>
  </tr>
  <tr>
    <td>Safari</td>
    <td>5</td>
    <td><strong>Not compatible</strong></td>
  </tr>
  <tr>
    <td>Internet Explorer</td>
    <td>11</td>
    <td><strong>Not compatible</strong></td>
  </tr>
</table>
    

<h3>License</h3>
<p>Coded by <a href="https://www.facebook.com/fg1998">fg1998</a></p>
<p>I really don´t know much about license. I believe the <em>Apache.org Version 2.0</em> is enough for everyone. In feel words, you can use, copy, modify, etc whatever you want. I hope this piece of software cand be useful for you.
If you need some more, please let me know.</p>
<pre>http://www.apache.org/licenses/LICENSE-2.0</pre>
<p>I found this text and I believe it is important... </p>
<blockquote>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</blockquote>
