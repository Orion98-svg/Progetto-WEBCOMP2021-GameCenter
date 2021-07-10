package it.unical.mat.webcomp21.persistence.dao;

import java.util.List;

import it.unical.mat.webcomp21.model.GiochiPosseduti;

public interface GiochiPossedutiDAO {
	
	public void save(GiochiPosseduti gd);  // Create
	public GiochiPosseduti findByPrimaryKey(int id);     // Retrieve
	public List<GiochiPosseduti> findAll();       
	public void update(GiochiPosseduti gd); //Update
	public void delete(GiochiPosseduti gd); //Delete	

}
