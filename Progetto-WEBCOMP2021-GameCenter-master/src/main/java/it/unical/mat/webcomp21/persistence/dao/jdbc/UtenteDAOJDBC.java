package it.unical.mat.webcomp21.persistence.dao.jdbc;

import java.util.List;

import it.unical.mat.webcomp21.model.GiochiDesiderati;
import it.unical.mat.webcomp21.model.GiochiPosseduti;
import it.unical.mat.webcomp21.model.Utente;
import it.unical.mat.webcomp21.persistence.DBSource;
import it.unical.mat.webcomp21.persistence.dao.UtenteDAO;

public class UtenteDAOJDBC implements UtenteDAO {

	private DBSource dbSource;

	public UtenteDAOJDBC(DBSource dbSource) {
		this.dbSource = dbSource;
	}

	@Override
	public void save(Utente gd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Utente findByPrimaryKey(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Utente> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Utente gd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Utente gd) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addGiochiPosseduti(int idUtente, int idGioco) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void addGiochiDesiderati(int idUtente, int idGioco) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<GiochiPosseduti> giochiPosseduti(int idUtente) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<GiochiDesiderati> giochiDesiderati(int idUtente) {
		// TODO Auto-generated method stub
		return null;
	}

}
