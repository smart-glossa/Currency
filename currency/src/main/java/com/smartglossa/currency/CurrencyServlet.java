package com.smartglossa.currency;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;


public class CurrencyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public CurrencyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		doPost(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
String operation = request.getParameter("operation");
		
		if (operation.equals("add")) {
			JSONObject obj = new JSONObject();
			int rs1 = Integer.parseInt("rs1");
			int rs2 = Integer.parseInt("rs2");
			int rs5 = Integer.parseInt("rs5");
			int rs10 = Integer.parseInt("rs10");
			int rs20 =Integer.parseInt("rs20");
			int rs50 = Integer.parseInt("rs50");
			int rs100 = Integer.parseInt("rs100");
			int rs500 = Integer.parseInt("rs500");
			int rs1000 = Integer.parseInt("rs1000");
			int rs2000 = Integer.parseInt("rs2000");
			int total = Integer.parseInt("total");
			try {
				Class.forName("com.mysql.jdbc.Driver");
				Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/Currency","root","root");
				Statement statement = connection.createStatement();
				String query ="insert into (one,two,five,ten,twenty,fivty,oneh,fiveh,onet,twot,total)values("+rs1+","+rs2+","+rs5+","+rs10+","+rs20+","+rs50+","+rs100+","+rs500+","+rs1000+","+rs2000+","+total+")";
				statement.execute(query);
				obj.put("status", "success");
				response.getWriter().print(obj);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				obj.put("status", "fail");
			}
	}
		

	}
	}
