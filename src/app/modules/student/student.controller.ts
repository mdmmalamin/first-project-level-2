import { RequestHandler } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

// Higher Order Function

const getAllStudents: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentFromDB(req.query);

  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Students is retrieved successfully.',
    data: result,
  });
});

const getOneStudent: RequestHandler = catchAsync(async (req, res, next) => {
  // const studentId = req.params.studentId;
  const { id } = req.params;
  const result = await StudentServices.getOneStudentFromDB(id);
  // console.log(result)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is retrieved successfully.',
    data: result,
  });
});

const updateStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { student } = req.body;

  const result = await StudentServices.updateStudentFromDB(id, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated successfully.',
    data: result,
  });
});

const deleteStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const result = await StudentServices.deleteStudentFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully.',
    // data: '',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getOneStudent,
  updateStudent,
  deleteStudent,
};
