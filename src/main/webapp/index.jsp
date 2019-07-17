<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html>
<style>
    body {
        text-align: center
    }

    div {
        margin: 0 auto
    }
</style>
<body>
<div class="ibox-content" style="width:30%;">
    <form action="${pageContext.request.contextPath }/testSend/sendKV" id="Form1" method="post" class="form-horizontal m-t">
        <div>
            <div class="form-group">
                <label class="col-sm-3 control-label">金额：</label>
                <div class="col-sm-9">
                    <input type="text" name="p3_money" class="form-control" placeholder="请输入金额" >
                </div>
            </div>
            <div class="form-group">
                <label class="col-sm-3 control-label">支付方式：</label>
                <div class="col-sm-9">
                    <select class="form-control" name="p10_paytype">
                        <option value="ZFB">支付宝</option>
                        <option value="WX">微信</option>
                    </select>
                </div>
            </div>
        </div>
        <input type="submit" title="KV值提交" value="KV值提交" class="btn btn-primary" />
        <input type="button" title="Json提交" value="Json提交" onclick="exportlist();" class="btn btn-primary" />
    </form>
</div>
<script type="text/javascript">
    function exportlist() {
        document.getElementById('Form1').action = "${pageContext.request.contextPath }/testSend/sendJson";
        document.getElementById("Form1").submit();
        document.getElementById('Form1').action = "${pageContext.request.contextPath }/testSend/sendKV";
    }
</script>
</body>
</html>
