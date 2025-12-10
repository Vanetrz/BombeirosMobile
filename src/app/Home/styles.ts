import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", 
  },
  
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 50, 
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  
  card: {
    width: '90%',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  
  logoutButton: {
    marginTop: 40,
    padding: 10,
  },
  logoutText: {
    color: '#dc3545', 
    fontSize: 16,
    fontWeight: '500',
  }
});