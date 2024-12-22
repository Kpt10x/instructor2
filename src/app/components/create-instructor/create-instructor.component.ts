import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-create-instructor',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],  // Add CommonModule here
  templateUrl: './create-instructor.component.html',
  styleUrls: ['./create-instructor.component.css'],
})
export class CreateInstructorComponent implements OnInit {
  createInstructorForm: FormGroup;
  instructors: any[] = []; // Array to store instructor data
  editingIndex: number | null = null; // Track which instructor is being edited

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.createInstructorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      subject: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    // Fetch initial instructor data from JSON
    this.http.get<any[]>('assets/data/instructors.json').subscribe(
      (data) => {
        this.instructors = data;
      },
      (error) => {
        console.error('Error loading instructor data:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.createInstructorForm.valid) {
      const formData = this.createInstructorForm.value;

      if (this.editingIndex !== null) {
        // Update existing instructor
        this.instructors[this.editingIndex] = formData;
        this.editingIndex = null;
      } else {
        // Add new instructor
        this.instructors.push({ id: this.instructors.length + 1, ...formData });
      }

      this.createInstructorForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  onEdit(index: number): void {
    const instructor = this.instructors[index];
    this.createInstructorForm.setValue({
      name: instructor.name,
      email: instructor.email,
      phone: instructor.phone,
      subject: instructor.subject,
      experience: instructor.experience,
    });
    this.editingIndex = index;
  }

  onDelete(index: number): void {
    this.instructors.splice(index, 1);
  }
}
