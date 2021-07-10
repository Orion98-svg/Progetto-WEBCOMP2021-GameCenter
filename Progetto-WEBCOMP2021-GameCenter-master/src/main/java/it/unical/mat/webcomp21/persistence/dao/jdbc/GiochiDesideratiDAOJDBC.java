package it.unical.mat.webcomp21.persistence.dao.jdbc;

import java.util.List;

import it.unical.mat.webcomp21.model.GiochiDesiderati;
import it.unical.mat.webcomp21.persistence.DBSource;
import it.unical.mat.webcomp21.persistence.dao.GiochiDesideratiDAO;

public class GiochiDesideratiDAOJDBC implements GiochiDesideratiDAO {
	
	private DBSource dbSource;

	public GiochiDesideratiDAOJDBC(DBSource dbSource) {
		this.dbSource = dbSource;
	}

	@Override
	public void save(GiochiDesiderati gd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public GiochiDesiderati findByPrimaryKey(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<GiochiDesiderati> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(GiochiDesiderati gd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(GiochiDesiderati gd) {
		// TODO Auto-generated method stub
		
	}

}
