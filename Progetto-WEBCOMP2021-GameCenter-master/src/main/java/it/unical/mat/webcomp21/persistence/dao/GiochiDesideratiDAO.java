package it.unical.mat.webcomp21.persistence.dao;

import java.util.List;

import it.unical.mat.webcomp21.model.GiochiDesiderati;

public interface GiochiDesideratiDAO {
	
	public void save(GiochiDesiderati gd);  // Create
	public GiochiDesiderati findByPrimaryKey(int id);     // Retrieve
	public List<GiochiDesiderati> findAll();       
	public void update(GiochiDesiderati gd); //Update
	public void delete(GiochiDesiderati gd); //Delete	

}
