package it.unical.mat.webcomp21.persistence;
import it.unical.mat.webcomp21.persistence.dao.GiochiDesideratiDAO;
import it.unical.mat.webcomp21.persistence.dao.GiochiPossedutiDAO;
import it.unical.mat.webcomp21.persistence.dao.UtenteDAO;
import it.unical.mat.webcomp21.persistence.dao.jdbc.GiochiDesideratiDAOJDBC;
import it.unical.mat.webcomp21.persistence.dao.jdbc.GiochiPossedutiDAOJDBC;
import it.unical.mat.webcomp21.persistence.dao.jdbc.UtenteDAOJDBC;

public class DBManager {
	
	private static DBManager instance = null;
	
	static DBSource dataSource;
	
	static {
		try {
			Class.forName("org.postgresql.Driver");
			//questi vanno messi in file di configurazione!!!	
			dataSource=new DBSource("jdbc:postgresql://localhost:5432/GameCenter","postgres","postgres");
		} 
		catch (Exception e) {
			System.err.println("PostgresDAOFactory.class: failed to load MySQL JDBC driver\n"+e);
			e.printStackTrace();
		}
	}
	
	public static DBManager getInstance() {
		if (instance == null) {
			instance = new DBManager();
		}
		return instance;
	}
	
	private DBManager() {}
	
	public static DBSource getDataSource() {
		return dataSource;
	}
	
	public GiochiPossedutiDAO giochiPossedutiDAO() {
		return new GiochiPossedutiDAOJDBC(dataSource);
	}
	
	public GiochiDesideratiDAO giochiDesideratiDAO() {
		return new GiochiDesideratiDAOJDBC(dataSource);
	}
	
	public UtenteDAO utenteDAO() {
		return new UtenteDAOJDBC(dataSource);
	}

}
