package it.unical.mat.webcomp21.persistence.dao;

import java.util.List;

import it.unical.mat.webcomp21.model.GiochiDesiderati;
import it.unical.mat.webcomp21.model.GiochiPosseduti;
import it.unical.mat.webcomp21.model.Utente;

public interface UtenteDAO {
	
	public void save(Utente utente);  // Create
	public Utente findByPrimaryKey(int id);     // Retrieve
	public List<Utente> findAll();       
	public void update(Utente utente); //Update
	public void delete(Utente utente); //Delete	
	public void addGiochiPosseduti(int idUtente, int idGioco);
	public void addGiochiDesiderati(int idUtente, int idGioco);
	public List<GiochiPosseduti> giochiPosseduti(int idUtente);
	public List<GiochiDesiderati> giochiDesiderati(int idUtente);
	
	
	
	

}
