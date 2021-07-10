package it.unical.mat.webcomp21.persistence.dao.jdbc;

import java.util.List;

import it.unical.mat.webcomp21.model.GiochiPosseduti;
import it.unical.mat.webcomp21.persistence.DBSource;
import it.unical.mat.webcomp21.persistence.dao.GiochiPossedutiDAO;

public class GiochiPossedutiDAOJDBC implements GiochiPossedutiDAO {
	
	private DBSource dbSource;

	public GiochiPossedutiDAOJDBC(DBSource dbSource) {
		this.dbSource = dbSource;
	}

	@Override
	public void save(GiochiPosseduti gd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public GiochiPosseduti findByPrimaryKey(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<GiochiPosseduti> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(GiochiPosseduti gd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(GiochiPosseduti gd) {
		// TODO Auto-generated method stub
		
	}

}
